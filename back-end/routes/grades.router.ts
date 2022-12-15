import express, { Request, Response } from 'express';
import { GradeService } from '../services/grades.service';
import { StudentService } from '../services/student.service';

const router = express.Router();
const grades = new GradeService();

router.get('/knowledges', (req: Request, res: Response, next: any) => {
    try {
        grades.listAll(res, next)
    } catch (error) {
        next();
    }
});


router.get('/rubric/:idKnowledge', (req: Request, res: Response, next: any) => {
    const { idKnowledge } = req.params
    try {
        grades.listAll(res, next)
    } catch (error) {
        next();
    }
});

export { router as gradesRouter }