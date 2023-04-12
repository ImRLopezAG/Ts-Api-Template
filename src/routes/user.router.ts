import 'reflect-metadata'
import { container } from 'tsyringe'
import { Router } from 'express'
import { UserController } from '../controllers/user.controller'

export const user = Router()

const controller: UserController = container.resolve(UserController)

user.get('/', controller.GetAll)
user.get('/:id', controller.Get)
user.post('/', controller.Create)
user.put('/:id', controller.Update)
user.delete('/:id', controller.Delete)
