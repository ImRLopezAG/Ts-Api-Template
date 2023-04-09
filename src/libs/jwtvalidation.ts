import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { SECRET } from '../types/constants'

export const jwtValidation = (req: Request, res: Response, next: NextFunction): Response | any => {
  const token = req.header('auth-token')
  if (token === undefined) return res.status(401).json({ error: 'Access denied' })
  try {
    jwt.verify(token, SECRET)
    next()
  } catch (error) {
    res.status(400).json('Invalid token')
  }
}
