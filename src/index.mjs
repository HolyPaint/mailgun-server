import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import {} from 'dotenv/config';
import mailRoutes from './routes/mail.routes.js';

const main = () => {
  // Crear servidor de express
  const app = express();

  // CORS
  app.use(cors());

  // Directorio publico
  app.use(express.static('public'));

  // Middlewares
  app.use(morgan('dev'));

  // Lectura y parseo del body
  app.use(express.json());

  // Routes
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(path.dirname(__filename));

  app.use('/api/mail', mailRoutes);

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

  // Set port
  app.set('port', process.env.PORT);

  app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

main();
