import 'reflect-metadata'
import { container } from 'tsyringe'
import { Router } from 'express'
import { UserController } from '@/controllers'
import { validateUpdateUser, validateUser } from '@/middleware'
import { jwtValidation } from '@/libs'

export const user = Router()

const controller: UserController = container.resolve(UserController)

user.get('/List', controller.GetAll)
user.get('/Get/:id', controller.Get)
user.get('/email/:email', controller.GetByEmail)
user.get('/username/:username', controller.GetByUsername)
user.post('/Create', validateUser, controller.Create)
user.put('/Update/:id', jwtValidation, validateUpdateUser, controller.Update)
user.delete('/Delete/:id', controller.Delete)
