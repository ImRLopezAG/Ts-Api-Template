import express, { Application, Request, Response } from 'express'
import { entity } from './routes/index'
import bodyParser from 'body-parser'
import { errorHandler } from './middleware/index'
import { Base } from './types/constants'
const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(`${Base}entities`, entity)

app.get('/', (_req: Request, res: Response) => {
  res.redirect(`${Base}entities`)
})

app.use('*', errorHandler)

export default app
