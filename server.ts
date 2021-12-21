import express, { Response, Request } from 'express';
import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';

const app: express.Application = express();

app.use(express.urlencoded({ extended: true }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).send('<h1>Page not found!</h1>');
});

app.listen(4000, () => {
  console.log(`the server is up at http://localhost${4000}`);
});
