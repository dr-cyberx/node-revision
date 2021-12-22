import express, { Router, Response, Request } from 'express';
import path from 'path';
import { Products } from './admin';
import rootDir from '../utils/path';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  //   res.send('hello');
  console.log('--->>> ', Products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

export default router;
