import express from 'express';
import path from 'path'
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes)

// jogar do expresss para o front nossos arquivos da pasta
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

// server
app.listen(3333, () => console.log('servidor online...'))
