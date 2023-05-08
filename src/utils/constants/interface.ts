import { NextFunction, Request, Response } from 'express'
import { Document } from 'mongoose'

export interface Schema {
  field: string | any
  allowNull: boolean | any
}

export interface IGenericService<TEntity extends Document> {
  GetAll: () => Promise<TEntity[]>
  Get: (id: string) => Promise<TEntity | null>
  Create: (data: TEntity) => Promise<TEntity>
  Update: (id: string, data: TEntity) => Promise<TEntity>
  Delete: (id: string) => Promise<void>
  GetSchema: () => Schema[]
}

export interface IGenericController {
  GetAll: (req: Request, res: Response, next: NextFunction) => Promise<Response>
  Get: (req: Request, res: Response, next: NextFunction) => Promise<Response>
  Create: (req: Request, res: Response, next: NextFunction) => Promise<Response>
  Update: (req: Request, res: Response, next: NextFunction) => Promise<Response>
  Delete: (req: Request, res: Response, next: NextFunction) => Promise<Response>
}
