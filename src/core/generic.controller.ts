import { NextFunction, Request, Response } from 'express'
import { Model } from 'sequelize'
import { IGenericController } from '../types/interface'
import { GenericService } from './generic.service'

export class GenericController<TEntity extends Model, TService extends GenericService<TEntity>> implements IGenericController {
  protected service: TService

  constructor (service: TService) {
    this.service = service
    this.GetAll = this.GetAll.bind(this)
    this.Get = this.Get.bind(this)
    this.Create = this.Create.bind(this)
    this.Update = this.Update.bind(this)
    this.Delete = this.Delete.bind(this)
  }

  async GetAll (_req: Request, res: Response, next: NextFunction): Promise<Response | any> {
    try {
      return res.status(200).json(await this.service.GetAll())
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
      return next(error)
    }
  }

  async Get (req: Request, res: Response, next: NextFunction): Promise<Response | any> {
    try {
      const entity = await this.service.Get(req.params.id)
      if (entity != null) {
        return res.status(200).json(entity)
      } else {
        return res.status(404).json({ message: `The entity with id ${req.params.id} does not exist` })
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
      return next(error)
    }
  }

  async Create (req: Request, res: Response, next: NextFunction): Promise<Response | any> {
    try {
      const schema = this.service.GetSchema()
      for (const field of schema) {
        if (field.allowNull === false && req.body[field.field] === undefined) {
          return res.status(400).json({ message: `The field ${field.field} is required` })
        }
      }
      const entity = req.body as TEntity
      return res.status(201).json(await this.service.Create(entity))
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
      return next(error)
    }
  }

  async Update (req: Request, res: Response, next: NextFunction): Promise<Response | any> {
    try {
      const id = req.params.id
      const entity = await this.service.Get(id)
      if (entity != null) {
        const data = req.body as TEntity
        return res.status(200).json(await this.service.Update(id, data))
      } else {
        return res.status(404).json({ message: `The entity with id ${id} does not exist` })
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
      return next(error)
    }
  }

  async Delete (req: Request, res: Response, next: NextFunction): Promise<Response | any> {
    try {
      const entity = await this.service.Get(req.params.id)
      if (entity != null) {
        await this.service.Delete(req.params.id)
        return res.status(204).json()
      } else {
        return res.status(404).json({ message: 'Not found' })
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message })
      }
      return next(error)
    }
  }
}
