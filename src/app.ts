import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as pkg from '../package.json'
import { errorHandler } from './middleware'
import * as router from './routes'
import { BASE } from './types/constants'

const app: Application = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.set('pkg', pkg)
app.get('/', (_req: Request, res: Response) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    version: app.get('pkg').version,
    description: app.get('pkg').description,
    contact: app.get('pkg').contact
  })
})

app.use(`${BASE}auth`, router.auth)
app.use(`${BASE}entities`, router.entity)
app.use(`${BASE}users`, router.user)

app.use('*', errorHandler)

export default app
