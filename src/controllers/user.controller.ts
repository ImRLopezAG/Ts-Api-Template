import { Lifecycle, autoInjectable, scoped } from 'tsyringe'
import { GenericController } from '../core'
import { IUserController } from '../interfaces/controllers/IUserController'
import { User } from '../models'
import UserService from '../services/user.service'
@autoInjectable()
@scoped(Lifecycle.ContainerScoped)
export class UserController extends GenericController<User, UserService> implements IUserController {
  protected service: UserService
  constructor (service: UserService) {
    super(service)
    this.service = service
  }
}
