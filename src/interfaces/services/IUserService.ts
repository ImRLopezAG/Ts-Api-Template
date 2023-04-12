import { User } from '../../models'
import { IGenericService } from '../../types/interface'

export interface IUserService extends IGenericService<User> {
  GetByUserName: (username: string) => Promise<User | null>
}
