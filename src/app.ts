import express, { Application, Request, Response } from 'express'
import { errorHandler } from './middleware/index'
import { auth, entity, user } from './routes/index'
import { BASE } from './types/constants'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import * as pkg from '../package.json'

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

app.use(`${BASE}entities`, entity)
app.use(`${BASE}users`, user)
app.use(`${BASE}auth`, auth)

app.use('*', errorHandler)

export default app
