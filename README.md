# API RESTful - Gerenciamento de Recursos

## Descrição
Esta API é uma implementação de **API RESTful** para gerenciamento de recursos, permitindo realizar operações CRUD (**Create, Read, Update, Delete**) utilizando os métodos HTTP **GET, POST, PUT, PATCH e DELETE**.

A API é documentada com **Swagger**, permitindo que os usuários visualizem e testem as rotas de forma interativa.

O projeto também conta com **Docker**, garantindo que o ambiente de desenvolvimento seja consistente e pronto para produção.

---

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript  
- **Express.js**: Framework web para Node.js  
- **Swagger**: Documentação interativa da API  
- **Swagger UI Express**: Serve a documentação interativa no Express  
- **Docker**: Criação de containers isolados para rodar a API de forma consistente  

---

## Funcionalidades

A API implementa as seguintes operações CRUD:

- **GET /resources**: Retorna todos os recursos  
- **GET /resources/:id**: Retorna um recurso específico pelo ID  
- **POST /resources**: Cria um novo recurso  
- **PUT /resources/:id**: Atualiza um recurso existente pelo ID  
- **PATCH /resources/:id**: Atualiza parcialmente um recurso existente  
- **DELETE /resources/:id**: Remove um recurso específico pelo ID  

---

## Tratamento de Erros

A API retorna os seguintes códigos de status HTTP:

- **200 OK**: Requisição bem-sucedida  
- **201 Created**: Recurso criado com sucesso  
- **204 No Content**: Recurso deletado com sucesso  
- **400 Bad Request**: Erros de validação ou parâmetros inválidos  
- **404 Not Found**: Recurso não encontrado  
- **500 Internal Server Error**: Erro inesperado no servidor  

---

## Docker

Para rodar a API em Docker, siga os passos:

1. **Construir a imagem**:  
```bash
docker build -t api-recursos:1.0 .

Rodar o container:
docker run -p 3000:3000 api-recursos:1.0

Acesse a API em: http://localhost:3000
A documentação Swagger estará disponível em: http://localhost:3000/api-docs

Usar Docker garante que a API funcione da mesma forma em qualquer máquina, sem problemas de dependências ou configuração.
