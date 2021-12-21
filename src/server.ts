import express, { Response, Request } from 'express';
import adminRoutes from '../routes/admin';
import shopRoutes from '../routes/shop';

const app: express.Application = express();

app.use(express.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from Express</h1>');
});

app.listen(4000, () => {
  console.log(`the server is up at http://localhost${4000}`);
});
