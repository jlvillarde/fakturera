import translationRoute from "./translationRoute.js";

export default function routes(fastify) {

    fastify.register(translationRoute)
}