import express from "express";

// aqui ele roda um arquivo
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'hello world'})

});
;
export default routes