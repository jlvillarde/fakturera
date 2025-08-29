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

    // UPDATE a product by id
    fastify.put("/products/:id", async (request, reply) => {
        try {
            const { id } = request.params;
            const updateData = request.body;

            const product = await Product.findByPk(id);
            if (!product) {
                return reply.status(404).send({ error: "Product not found" });
            }

            await product.update(updateData);
            return reply.status(200).send(product);
        } catch (err) {
            fastify.log.error(err);
            reply.status(500).send({ error: "Failed to update product" });
        }
    });
}
