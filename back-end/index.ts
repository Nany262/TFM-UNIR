import express, { Express, Request, Response } from 'express';
import { routersAPI } from './routes'
import cors from 'cors';
import { boomErrorHandler, errorHandler, logErrors } from './middlewares/error.handler';
import boom from '@hapi/boom';

const app: Express = express();
const port = 3000;
const whiteList = ['http://localhost:4200', 'http://localhost:3000/'];
const options = {
  origin: (origin: any, callback: any) => {
    if (whiteList.includes(origin)) {
      callback(null, true)
    }
    else { throw boom.unauthorized('Domain not allowed') }
  }
}

//app.use(cors(options));
app.use(cors());
app.use(express.json());

routersAPI(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Working now!!!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});