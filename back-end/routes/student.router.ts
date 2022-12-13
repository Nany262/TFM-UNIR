import express, { Request, Response } from 'express';
import { StudentService } from '../services/student.service';

const router = express.Router();
const student = new StudentService();

router.get('/:idSubject', (req: Request, res: Response, next: any) => {
    const { idSubject } = req.params
    try {
        student.listBySubject(idSubject, res, next)
    } catch (error) {
        next();
    }
});

export { router as studentRouter }