import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../models'
import { SECRET } from '../types/constants'
import crypto from 'crypto'

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
        sub: user.username,
        email: user.email,
        uid: user.id
      }, SECRET, {
        expiresIn: '1h',
        issuer: 'my app',
        audience: 'my users',
        jwtid: crypto.randomBytes(16).toString('hex')
      })

      req.uid = user.id
      return res
        .status(200)
        .header('auth-token', token)
        .json({ token, message: 'Login successful' })
    })
  }).catch((err) => {
    if (err instanceof Error) {
      console.log(err.message)
      return res.status(500).json({ error: 'Internal server error' })
    }
    return res.status(500).json({ error: 'Internal server error' })
  })
}
