import express, { Request, Response } from 'express';
import { TeacherService } from '../services/teacher.service';

const router = express.Router();
const teachers = new TeacherService();

router.get('/', (req: Request, res: Response, next: any) => {
    try {
        teachers.listAll(res, next)
    } catch (error) {
        next();
    }
});

export { router as teachersRouter }