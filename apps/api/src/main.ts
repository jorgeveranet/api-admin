/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import helmet from "helmet";
import * as path from 'path';
import * as express from 'express';

const app = express();

app.use(helmet())

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
