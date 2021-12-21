import express, { Router, Response, Request } from 'express';
import path from 'path';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  //   res.send('hello');
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

export default router;
