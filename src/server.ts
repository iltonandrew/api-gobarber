import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.get('/', (request, response) => response.json({ message: 'Salve' }));

app.listen(3333, () => {
  console.log('Hora do show! ⏰');
});
