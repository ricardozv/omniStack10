const { Router} = require('express');

const routes = Router();

routes.get('/', (request, Response) => {
    return response.json({ message:'Servidor rodando na bagaceira do sertão!'})
});

module.exports = routes;