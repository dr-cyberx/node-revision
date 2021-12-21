import express, { Router, Response, Request } from 'express';

const router: Router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req: Request, res: Response) => {
  res.send(
    '<form method="POST" action="/admin/add-product"><input type="text" name="title" /> <button type="submit">Add Product</button></form>',
  );
});

// /admin/add-product => POST
router.post('/add-product', (req: Request, res: Response) => {
  console.log(req.body);
  res.redirect('/');
});

export default router;
