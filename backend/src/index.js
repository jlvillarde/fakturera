import Fastify from "fastify";
import path from "path";
import { fileURLToPath } from "url";
import fastifyStatic from "@fastify/static";

import routes from "./route/index.js";
import "./seed/translationSeed.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Fastify({
    logger: {
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true,
                translateTime: "HH:MM:ss",
                ignore: "pid,hostname",
            },
        },
    },
});

async function main() {
    try {
        // Serve static files (React build)
        app.register(fastifyStatic, {
            root: path.join(__dirname, "/static"), // or "../frontend/build"
            prefix: "/", // all static assets served from root
        });

        // Catch-all route for React Router (important!)
        app.setNotFoundHandler((req, reply) => {
            reply.sendFile("index.html");
        });

        app.register(routes, { prefix: "/api" });

        await app.listen({ port: 3000, host: "0.0.0.0" });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
}

main();
