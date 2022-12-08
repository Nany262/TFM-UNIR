import express, { Request, Response } from 'express';
import { SubjectService } from '../services/subject.services';

const router = express.Router();
const subject = new SubjectService();

router.get('/:idTeacher', (req: Request, res: Response, next: any) => {
    const { idTeacher } = req.params
    try {
        subject.findByTeacher(idTeacher, res, next)
    } catch (error) {
        next();
    }
});

export { router as subjectRouter }