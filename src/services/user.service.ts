import { GenericService } from '../core'
import { IUserService } from '../interfaces/services/IUserService'
import { User } from '../models'

export default class UserService extends GenericService<User> implements IUserService {
  constructor () {
    super(User)
  }

  async GetByUserName (username: string): Promise<User | null> {
    try {
      const user = await User.findOne({ where: { username } })
      return user
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Error while getting user by username')
    }
  }
}
