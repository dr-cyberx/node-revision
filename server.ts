import express, { Response, Request } from 'express';
import path from 'path';
import adminRoutes from './routes/admin';
import shopRoutes from './routes/shop';

const app: express.Application = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(4000, () => {
  console.log(`the server is up at http://localhost:${4000}`);
});
