import 'reflect-metadata'
import { container } from 'tsyringe'
import { Router } from 'express'
import EntityController from '../controllers/entity.controller'

export const entity = Router()

const controller: EntityController = container.resolve(EntityController)

entity.get('/', controller.GetAll)
entity.get('/:id', controller.Get)
entity.post('/', controller.Create)
entity.put('/:id', controller.Update)
entity.delete('/:id', controller.Delete)
