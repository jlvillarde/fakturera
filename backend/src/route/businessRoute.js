import Business from "../model/Business.js";

export default function businessRoute(fastify) {

    fastify.get('/business/:id', {
        schema: {
            params: {
                type: 'object',
                properties: {
                    id: { type: 'integer' }
                },
                required: ['id']
            }
        }
    }, async (req, reply) => {
        let id = null;
        try {
            id = req.params.id;
            const businessData = await Business.findByPk(id)

            if (!businessData) {
                return reply.status(404).send({ error: "Business not found" })
            }

            return reply.send(businessData)

        } catch (error) {
            fastify.log.error(error);
            reply.status(500).send({ error: "Failed to fetch business" });
        }
    })

    fastify.put("/business/:id", async (req, reply) => {
        try {
            await Business.update(req.body, { where: { id: req.params.id } })
            const updated = await Business.findByPk(req.params.id)
            return reply.send(updated)
        } catch (err) {
            reply.status(500).send({ error: "Update failed" })
        }
    })

}