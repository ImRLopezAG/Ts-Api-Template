import { NextFunction, Request, Response } from 'express'
import { Model } from 'sequelize'

export interface schema {
  field: string | any
  allowNull: boolean | any
}

export interface IGenericService<T extends Model> {
  GetAll: () => Promise<T[]>
  Get: (id: string) => Promise<T | null>
  Create: (data: T) => Promise<T>
  Update: (id: string, data: T) => Promise<T>
  Delete: (id: string) => Promise<void>
  GetSchema: () => schema[]
}

export interface IGenericController {
  GetAll: (req: Request, res: Response, next: NextFunction) => Promise<Response>
  Get: (req: Request, res: Response, next: NextFunction) => Promise<Response>
  Create: (req: Request, res: Response, next: NextFunction) => Promise<Response>
  Update: (req: Request, res: Response, next: NextFunction) => Promise<Response>
  Delete: (req: Request, res: Response, next: NextFunction) => Promise<Response>
}
