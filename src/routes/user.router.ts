import 'reflect-metadata'
import { container } from 'tsyringe'
import { Router } from 'express'
import { UserController } from '../controllers/user.controller'
import { validateUpdateUser, validateUser } from '../middleware'
import { jwtValidation } from '../libs/jwtValidation'

export const user = Router()

const controller: UserController = container.resolve(UserController)

user.get('/', controller.GetAll)
user.get('/:id', controller.Get)
user.post('/', validateUser, controller.Create)
user.put('/:id', jwtValidation, validateUpdateUser, controller.Update)
user.delete('/:id', controller.Delete)
