import express from 'express'
import { Login, logOut, signUp } from '../controllers/auth.controller.js'
import { getCurrentUser } from '../controllers/user.controller.js'
import isAuth from '../middleware/isAuth.js'

const userRouter = express.Router()

userRouter.get('/current', isAuth, getCurrentUser)

export default userRouter