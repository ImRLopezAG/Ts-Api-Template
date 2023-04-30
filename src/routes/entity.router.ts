import 'reflect-metadata'
import { container } from 'tsyringe'
import { Router } from 'express'
import { EntityController } from '@/controllers'

export const entity = Router()

const controller: EntityController = container.resolve(EntityController)

entity.get('/List', controller.GetAll)
entity.get('/Get/:id', controller.Get)
entity.post('/Create', controller.Create)
entity.put('/Update/:id', controller.Update)
entity.delete('/Delete/:id', controller.Delete)
