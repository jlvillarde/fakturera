import translationRoute from "./translationRoute.js";
import productRoute from "./productRoute.js";

export default function routes(fastify) {

    fastify.register(translationRoute)
    fastify.register(productRoute)
}