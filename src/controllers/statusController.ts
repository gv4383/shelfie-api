import { Request, Response } from 'express';

export const getStatus = (req: Request, res: Response): void => {
  res.status(204).send("Welp, it's working. Now what?");
};
