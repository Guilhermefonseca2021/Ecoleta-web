const routes = require('express').Router();
const { randomUUID } = require('node:crypto')

type createPoint = {
    id?: string,
    name: string,
    endereco: string,
    estado: string,
    cidade: string,
    items: [
        id: number,
        name: string,
        link: string,
    ]
}

const data: createPoint[] = []


routes.get('/create_point', (req, res) => {
    const { name, endereco, estado, cidade, items } = req.body as createPoint;

    data.push({
        id: randomUUID(),
        name, 
        endereco, 
        estado, 
        cidade, 
        items
    })

    return res.status(201).send()
})

export default routes