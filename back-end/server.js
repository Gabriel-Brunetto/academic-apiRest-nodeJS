const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

let resources = [];
let idCounter = 1;

app.get('/resource', (req, res) => {
    res.status(200).json(resources);
});

app.get('/resource/:id', (req, res) => {
    const resource = resources.find(r => r.id == req.params.id);
    if (!resource) {
        return res.status(404).json({ error: 'Recurso não encontrado' });
    }
    res.status(200).json(resource);
});

app.post('/resource', (req, res) => {
    const newResource = { id: idCounter++, ...req.body };
    resources.push(newResource);
    res.status(201).json(newResource);
});

app.put('/resource/:id', (req, res) => {
    const resource = resources.find(r => r.id == req.params.id);
    Object.assign(resource, req.body);
    res.status(200).json(resource);
});

app.patch('/resource/:id', (req, res) => {
    const resource = resources.find(r => r.id == req.params.id);
    Object.assign(resource, req.body);
    res.status(200).json(resource);
});

app.delete('/resource/:id', (req, res) => {
    const index = resources.findIndex(r => r.id == req.params.id);
    if (index === -1) {
        return res.status(404).json({ error: 'Recurso não encontrado' });
    }
    resources.splice(index, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
