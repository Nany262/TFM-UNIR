import express, { Express } from 'express';
import { userRouter } from './user.router'

function routersAPI(app: Express) {
    app.use('/user', userRouter)
}

export { routersAPI }