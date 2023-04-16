import { NextFunction, Request, Response } from 'express'
import UserService from '../services/user.service'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { SECRET } from '../types/constants'

interface ValidateUser {
  username: string
  email: string
}

const services = new UserService()
export const validateUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  const { username, email }: ValidateUser = req.body

  if (username === undefined || email === undefined) {
    return res.status(400).json({ status: 400, message: 'The property username or email is required' })
  }

  const userByUsername = await services.GetByUserName(username)
  if (userByUsername?.username === username) {
    return res.status(400).json({ status: 400, message: 'Username already in use' })
  }

  const userByEmail = await services.GetByEmail(email)
  if (userByEmail?.email === email) {
    return res.status(400).json({ status: 400, message: 'Email already in use' })
  }

  return next()
}

export const validateUpdateUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  const token = req.header('auth-token')
  const { username, email }: ValidateUser = req.body
  const { id } = req.params
  if (token === undefined) return res.status(401).json({ status: 401, message: 'Access denied, you need to login' })
  try {
    const payload = jwt.verify(token, SECRET) as JwtPayload
    const user = await services.Get(payload.uid)
    const entity = await services.Get(id)

    if (user?.id !== entity?.id) {
      return res.status(401).json({ status: 400, message: 'The user is not the owner of the resource' })
    }

    if (user?.username !== username) {
      const searchUser = await services.GetByUserName(username)
      if (searchUser?.username === username) {
        return res.status(400).json({ status: 400, message: 'Username already in use' })
      }
    }

    if (user?.email !== email) {
      const searchEmail = await services.GetByEmail(email)
      if (searchEmail?.email === email) {
        return res.status(400).json({ error: 'Email already in use' })
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: 'Error while validating token on update' })
    }
    return res.status(400).json({ error: 'Invalid token' })
  }
  return next()
}
