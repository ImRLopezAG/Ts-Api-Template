import { SECRET } from '@/utils/constants'
import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

export const jwtValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | any => {
  const authHeader = req.headers.authorization
  if (authHeader?.split(' ')[0] !== 'Bearer') {
    return res.status(401).json({ error: 'Access denied, you need to login' })
  }

  const token = authHeader.split(' ')[1]
  if (!token || token.trim() === '') {
    return res.status(401).json({ error: 'Access denied, you need to login' })
  }

  try {
    const payload = jwt.verify(token, SECRET) as JwtPayload
    req.uid = payload.sub
    next()
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return res.status(500).send('Internal server error')
    }
    return res.status(401).send('Unauthorized')
  }
}
