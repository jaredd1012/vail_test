import cors from 'cors';
import express from 'express';

import { config } from './config.js';
import { pingRouter } from './routes/ping.js';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(pingRouter);

app.listen(port, () => {
  console.log(
    `API listening on http://localhost:${port} [env=${config.env}, version=${config.version}]`,
  );
});
