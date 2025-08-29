import Translation from "../model/Translation.js";

export default async function translationRoute(fastify) {
    // GET /api/translations/:lang - fetch all translations for a language
    fastify.get('/translations/:lang', async (request, reply) => {
        try {
            const lang = request.params.lang || 'en'; // language code, default 'en'
            const translation = await Translation.findByPk(lang); // fetch row by language code

            if (!translation) return reply.code(404).send({ error: 'Language not found' }); // 404 if missing

            return translation; // return translations JSON
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send({ error: 'Internal server error' }); // return 500
        }
    });
}
