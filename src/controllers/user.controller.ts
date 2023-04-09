import { GenericController } from '../core'
import { IUserController } from '../interfaces/controllers/IUserController'
import { User } from '../models'
import UserService from '../services/user.service'

export class UserController extends GenericController<User, UserService> implements IUserController {
  constructor () {
    super(new UserService())
  }
}
