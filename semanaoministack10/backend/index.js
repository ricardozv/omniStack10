const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://rico:rico1983@cluster0-jvcde.mongodb.net/geo?retryWrites=true&w=majority', {
    useNewUrlParser: true,  
    useUnifiedTopology: true});

app.use(express.json());

app.get('/', (request, Response) => {
    return Response.json({ message:'Servidor rodando na bagaceira do sertão!'})
});

app.listen(3333);