import express, { Router, Response, Request } from 'express';

const router: Router = express.Router();

router.use('/add-project', (req: Request, res: Response) => {
  res.send(
    '<form method="POST" action="/product"><input type="text" name="title" /> <button type="submit"></button></form>',
  );
});

router.use('/product', (req: Request, res: Response) => {
  res.send('product router');
});

export default router;
