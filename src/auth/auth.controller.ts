import { User } from '@/models'
import { SECRET } from '@/utils/constants'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

interface IAuth {
  username: string
  password: string
}

export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  const { username, password }: IAuth = req.body
  if (username === undefined || password === undefined) {
    return res
      .status(400)
      .json({
        error: `The property ${
          username === undefined ? 'username' : 'password'
        } is required`
      })
  }

  await User.findOne({
    where: { username }
  })
    .then(async (user) => {
      if (user === null) {
        return res.status(400).json({ error: 'The user  is incorrect' })
      }
      await bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
          return res.status(400).json({ error: 'The password is incorrect' })
        }
        const token = jwt.sign(
          {
            sub: user.username,
            email: user.email,
            uid: user.id
          },
          SECRET,
          {
            expiresIn: '1h',
            issuer: 'my app',
            audience: 'my users',
            jwtid: crypto.randomBytes(16).toString('hex')
          }
        )

        req.uid = user.id
        return res
          .status(200)
          .header('Authorization', token)
          .json({ message: 'Login successful', token })
      })
    })
    .catch((err) => {
      if (err instanceof Error) {
        console.log(err.message)
        return next(err)
      }
      return res.status(500).json({ error: 'Internal server error' })
    })
}
