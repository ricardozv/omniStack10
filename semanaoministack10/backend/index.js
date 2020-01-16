const express = require('express');
const app = express();

app.get('/', (request, Response) => {
    return Response.send('Servidor rodando na bagaceira!')
});

app.listen(3333);