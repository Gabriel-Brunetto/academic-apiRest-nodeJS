const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
const PORT = 3000;

app.use(express.json());

// Swagger endpoint
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

let resources = [];
let idCounter = 1;

/**
 * @swagger
 * components:
 *   schemas:
 *     Resource:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 */

/**
 * @swagger
 * /resource:
 *   get:
 *     summary: Lista todos os recursos
 *     responses:
 *       200:
 *         description: Sucesso
 */
app.get('/resource', (req, res) => {
  res.status(200).json(resources);
});

/**
 * @swagger
 * /resource/{id}:
 *   get:
 *     summary: Busca recurso por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Não encontrado
 */
app.get('/resource/:id', (req, res) => {
  const resource = resources.find(r => r.id == req.params.id);

  if (!resource) {
    return res.status(404).json({ error: 'Recurso não encontrado' });
  }

  res.status(200).json(resource);
});

/**
 * @swagger
 * /resource:
 *   post:
 *     summary: Cria um recurso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Exemplo
 *     responses:
 *       201:
 *         description: Criado
 */
app.post('/resource', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: 'name é obrigatório' });
  }

  const newResource = { id: idCounter++, ...req.body };
  resources.push(newResource);
  res.status(201).json(newResource);
});

/**
 * @swagger
 * /resource/{id}:
 *   put:
 *     summary: Atualiza recurso
 */
app.put('/resource/:id', (req, res) => {
  const resource = resources.find(r => r.id == req.params.id);

  if (!resource) {
    return res.status(404).json({ error: 'Recurso não encontrado' });
  }

  Object.assign(resource, req.body);
  res.status(200).json(resource);
});

/**
 * @swagger
 * /resource/{id}:
 *   delete:
 *     summary: Remove recurso
 */
app.delete('/resource/:id', (req, res) => {
  const index = resources.findIndex(r => r.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: 'Recurso não encontrado' });
  }

  resources.splice(index, 1);
  res.status(204).send();
});

// START SERVER
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
