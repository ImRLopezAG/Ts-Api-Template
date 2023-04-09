import { GenericService } from '../core'
import { IUserService } from '../interfaces/services/IUserService'
import { User } from '../models'

export default class UserService extends GenericService<User> implements IUserService {
  constructor () {
    super(User)
  }
}
