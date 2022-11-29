import express, { Express, Request, Response } from 'express';
import { routersAPI } from './routes'
import cors from 'cors';

const app: Express = express();
const port = 3000;

app.use(express.json());
const whiteList = ['http://localhost:4200'];
const options = {
  origin: (origin: any, callback: any) => {
    if (whiteList.includes(origin)) {
      callback(null, true)
    }
    else { callback(new Error('no permitido')) }
  }
}
app.use(cors(options));
routersAPI(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Working now!!!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});