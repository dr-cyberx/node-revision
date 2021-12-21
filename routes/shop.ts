import express, { Router, Response, Request } from 'express';

const router: Router = express.Router();

router.use('/', (req: Request, res: Response) => {
  res.send('Hello from Express');
});

export default router;
