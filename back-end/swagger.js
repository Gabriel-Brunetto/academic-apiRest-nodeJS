const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node API',
      version: '1.0.0',
      description: 'API CRUD documentada com Swagger',
    },
    servers: [
      {
        url: '/'
      },
    ],
  },
  apis: [__dirname + '/server.js'],
};

module.exports = swaggerJsdoc(options);
