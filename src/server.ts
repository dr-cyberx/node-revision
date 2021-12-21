import express from 'express';

const app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({ message: 'Hello world' });
});

app.listen(4000, () => {
  console.log(`the server is up at http://localhost${4000}`);
});
