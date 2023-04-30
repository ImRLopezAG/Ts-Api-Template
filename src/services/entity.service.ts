import { GenericService } from '@/core'
import { IEntityService } from '@/interfaces/services/IEntityService'
import { Entity } from '@/models'

export class EntityService extends GenericService<Entity> implements IEntityService {
  constructor () {
    super(Entity)
  }
}
