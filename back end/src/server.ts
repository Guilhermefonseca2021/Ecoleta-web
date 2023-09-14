import express from 'express';
import routes from './routes'

const app = express();

// 'use' adiciona uma funcionalidade e quero json arquivo
app.use(express.json());
app.use(routes)

app.listen(3000);



