import { GenericController } from '../core'
import { IEntityController } from '../interfaces/controllers/IEntityController'
import { Entity } from '../models'
import EntityService from '../services/entity.service'

export class EntityController extends GenericController<Entity, EntityService> implements IEntityController {
  constructor () {
    super(new EntityService())
  }
}
