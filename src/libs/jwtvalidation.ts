import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { SECRET } from '../types/constants'

export const jwtValidation = (req: Request, res: Response, next: NextFunction): Response | any => {
  const token = req.header('auth-token')
  if (token === undefined) return res.status(401).json({ error: 'Access denied, you need to login' })
  try {
    const payload = jwt.verify(token, SECRET) as JwtPayload
    req.uid = payload.sub
    next()
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: 'Error while validating token' })
    }
    return res.status(400).json({ error: 'Invalid token' })
  }
}
