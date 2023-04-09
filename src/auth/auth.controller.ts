import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../models'
import { SECRET } from '../types/constants'

interface IAuth {
  username: string
  password: string
}

export const authenticate = async (req: Request, res: Response): Promise<void> => {
  const { username, password }: IAuth = req.body
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
        id: user.id,
        username: user.username
      }, SECRET, { expiresIn: '1h' })

      return res
        .status(200)
        .header('auth-token', token)
        .json({ token, message: 'Login successful' })
    })
  }).catch((err) => {
    return res.status(500).json({ error: err })
  })
}
