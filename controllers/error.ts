import { Request, Response } from 'express';

export default (req: Request, res: Response) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
};
