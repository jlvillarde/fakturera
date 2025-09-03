import translationRoute from "./translationRoute.js";
import productRoute from "./productRoute.js";
import businessRoute from "./businessRoute.js";

export default function routes(fastify) {

    fastify.register(translationRoute)
    fastify.register(productRoute)
    fastify.register(businessRoute)
}