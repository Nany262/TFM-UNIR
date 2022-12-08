import express, { Request, Response } from 'express';
import { validatorHandler } from '../middlewares/validator.handler';
import { loginUserSchema, logoutUserSchema } from '../schema/user.schema';
import { UserService } from '../services/user.service';

const router = express.Router();
const user = new UserService();

router.post('/login', validatorHandler(loginUserSchema, 'body'),
  (req: Request, res: Response, next: any) => {
    try {
      user.updateStatus(req.body.email, true, res, next)
    } catch (error) {
      next();
    }
  });

router.put('/logout', validatorHandler(logoutUserSchema, 'body'),
  (req: Request, res: Response, next: any) => {
    try {
      user.updateStatus(req.body.email, false, res, next)
    } catch (error) {
      next();
    }
  });

export { router as userRouter }