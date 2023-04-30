import { Lifecycle, injectable, scoped } from 'tsyringe'
import { GenericController } from '@/core'
import { IEntityController } from '@/interfaces/controllers/IEntityController'
import { Entity } from '@/models'
import { EntityService } from '@/services'

@injectable()
@scoped(Lifecycle.ContainerScoped)
export class EntityController extends GenericController<Entity, EntityService> implements IEntityController {
  protected service: EntityService
  constructor (service: EntityService) {
    super(service)
    this.service = service
  }
}
