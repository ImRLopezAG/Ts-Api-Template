import { NextFunction, Request, Response } from 'express'

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): Response => {
  return res.status(500).json({ message: err.message })
}
