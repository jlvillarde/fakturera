import Product from "../model/Product.js";

export default async function productRoute(fastify, opts) {
    // GET all products
    fastify.get("/products", async (request, reply) => {
        try {
            const products = await Product.findAll();
            return products;
        } catch (err) {
            fastify.log.error(err);
            reply.status(500).send({ error: "Failed to fetch products" });
        }
    });
}
