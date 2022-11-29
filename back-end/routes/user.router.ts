import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/login', (req: Request, res: Response) => {
  const body = req.body;
  res.json({
    message: 'logged',
    data: body
  })
});

export { router as userRouter }