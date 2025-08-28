import Fastify from "fastify";
import path from "path";
import { fileURLToPath } from "url";
import fastifyStatic from "@fastify/static";

import routes from "./route/index.js";
import { seedProduct, seeedTranslation } from "./seed/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Fastify();

async function main() {
    try {

        // run seed for default database datas
        await seedProduct();
        await seeedTranslation();

        // Serve static files (React build)
        app.register(fastifyStatic, {
            root: path.join(__dirname, "/static"),
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
