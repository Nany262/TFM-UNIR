import express, { Express } from 'express';
import { gradesRouter } from './grades.router';
import { studentRouter } from './student.router';
import { subjectRouter } from './subject.router';
import { userRouter } from './user.router'

function routersAPI(app: Express) {
    app.use('/user', userRouter)
    app.use('/subjects', subjectRouter)
    app.use('/students', studentRouter)
    app.use('/grades',gradesRouter)
}

export { routersAPI }