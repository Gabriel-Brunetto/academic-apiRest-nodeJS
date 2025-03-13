<h1>API RESTful - Gerenciamento de Recursos</h1>
Descrição</br>
Esta API é uma implementação de uma API RESTful para gerenciamento de recursos, permitindo realizar operações CRUD (Create, Read, Update, Delete) utilizando os métodos HTTP GET, POST, PUT, PATCH e DELETE. A API também é documentada utilizando o Swagger, permitindo que os usuários visualizem e testem as rotas de forma interativa.</br>

<h2>Tecnologias Utilizadas</br></h2>
Node.js: Ambiente de execução JavaScript.</br>
Express.js: Framework web para Node.js.</br>
Swagger: Para documentação interativa da API.</br>
Swagger UI Express: Serve a documentação interativa no Express.</br>

<h2>Funcionalidades</h2>
A API implementa as seguintes operações CRUD:</br>

GET /resources: Retorna todos os recursos.</br>
GET /resources/:id: Retorna um recurso específico baseado no ID fornecido.</br>
POST /resources: Cria um novo recurso.</br>
PUT /resources/:id: Atualiza um recurso existente baseado no ID fornecido.</br>
PATCH /resources/:id: Atualiza parcialmente um recurso existente.</br>
DELETE /resources/:id: Remove um recurso específico baseado no ID fornecido.</br>

<h2>Tratamento de Erros</h2>

A API retorna os seguintes códigos de status HTTP, conforme necessário:

200 OK: A requisição foi bem-sucedida.</br>
201 Created: O recurso foi criado com sucesso.</br>
204 No Content: O recurso foi deletado com sucesso.</br>
400 Bad Request: A requisição contém erros de validação ou parâmetros inválidos.</br>
404 Not Found: O recurso solicitado não foi encontrado.</br>
500 Internal Server Error: Erro inesperado no servidor.
Testes</br>

Para testar a API você pode usar ferramentas como Postman ou Insomnia.