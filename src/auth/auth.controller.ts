import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../models'
import { SECRET } from '../types/constants'
import { v4 as uuid } from 'uuid'

interface IAuth {
  username: string
  password: string
}

export const authenticate = async (req: Request, res: Response): Promise<Response | any> => {
  const { username, password }: IAuth = req.body
  if (username === undefined || password === undefined) {
    return res.status(400).json({ error: `The property ${username === undefined ? 'username' : 'password'} is required` })
  }

  await User.findOne({
    where: { username }
  }).then(async (user) => {
    if (user === null) {
      return res.status(400).json({ error: 'The user  is incorrect' })
    }
    await bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        return res.status(400).json({ error: 'The password is incorrect' })
      }
      const token = jwt.sign({
        id: uuid().split('-').join(''),
        uid: user.id,
        username: user.username
      }, SECRET, {
        expiresIn: '1h',
        algorithm: 'HS256',
        audience: 'app users',
        issuer: 'app'
      })

      return res
        .status(200)
        .header('auth-token', token)
        .json({ token, message: 'Login successful' })
    })
  }).catch((err) => {
    return res.status(500).json({ error: err })
  })
}
