import { Router } from 'express'
import { EntityController } from '../controllers/entity.controller'
import { jwtValidation } from '../libs/jwtvalidation'

export const entity = Router()

const controller: EntityController = new EntityController()

entity.get('/', jwtValidation, controller.GetAll)
entity.get('/:id', controller.Get)
entity.post('/', controller.Create)
entity.put('/:id', controller.Update)
entity.delete('/:id', controller.Delete)
