import { GenericController } from '@/core'
import { IUserController } from '@/interfaces/controllers/IUserController'
import { User } from '@/models'
import { UserService } from '@/services'
import { Lifecycle, autoInjectable, scoped } from 'tsyringe'
import { NextFunction, Request, Response } from 'express'
@autoInjectable()
@scoped(Lifecycle.ContainerScoped)
export class UserController extends GenericController<User, UserService> implements IUserController {
  protected service: UserService
  constructor (service: UserService) {
    super(service)
    this.service = service
    this.GetByEmail = this.GetByEmail.bind(this)
    this.GetByUsername = this.GetByUsername.bind(this)
  }

  async GetByEmail (req: Request, res: Response, next: NextFunction): Promise<Response | any> {
    try {
      const email = req.params.email
      email ?? res.status(400).json({ message: 'The email is required' })

      const user = await this.service.GetByEmail(email)

      if (user != null) {
        return res.status(200).json(user)
      } else {
        return res.status(404).json({ message: `The user with email ${req.params.id} does not exist` })
      }
    } catch (error) {
      if (error instanceof Error) {
        return next(error)
      }
      return res.status(500).json({ status: 500, message: 'Internal server error' })
    }
  }

  async GetByUsername (req: Request, res: Response, next: NextFunction): Promise<Response | any> {
    try {
      const username = req.params.username
      username ?? res.status(400).json({ message: 'The username is required' })

      const user = await this.service.GetByUserName(username)

      if (user != null) {
        return res.status(200).json(user)
      } else {
        return res.status(404).json({ message: `The user with username ${req.params.id} does not exist` })
      }
    } catch (error) {
      if (error instanceof Error) {
        return next(error)
      }
      return res.status(500).json({ status: 500, message: 'Internal server error' })
    }
  }
}
