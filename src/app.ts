import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import swaggerSetup from './libs/swagger'
import { errorHandler } from './middleware'
import * as router from './routes'
import { BASE } from './types/constants'

const app: Application = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use(
  `${BASE}docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerSetup, {
    customSiteTitle: 'Ts Api Template'
  })
)

app.get('/', (_req: Request, res: Response) => {
  res.redirect(`${BASE}docs`)
})

app.use(`${BASE}auth`, router.auth)
app.use(`${BASE}entities`, router.entity)
app.use(`${BASE}users`, router.user)

app.use('*', errorHandler)

export default app
