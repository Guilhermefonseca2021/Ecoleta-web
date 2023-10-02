import express from 'express'
import knex from './database/connection'

const routes = express.Router();

routes.get('/items', async (request, response) => {
    // banco knex | tabela items | 'select * from'
    const items = await knex('items').select('*')

    // serializacao "transformas os dados apresentados mais acessiveis"
    const serialisedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        };
    }); 

    return response.json(serialisedItems);
})

routes.post('/points', async(request, response) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;
    // const name = request.body.name;

    await knex('point_items').insert({
        image: 'url_fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
    });

    return response.json({ success: true})
})

export default routes;

