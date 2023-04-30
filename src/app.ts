import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import morgan from 'morgan'
import { swaggerSetup } from '@/libs'
import { errorHandler } from '@/middleware'
import * as router from '@/routes'
import { BASE } from '@/utils/constants'

const app: Application = express()

app.use(
  cors({
    origin: true,
    credentials: true
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use(
  `${BASE}Docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerSetup, {
    customSiteTitle: 'Ts Api Template',
    customCss: '.swagger-ui .topbar { display: none }'
  })
)

app.get('/', (_req: Request, res: Response) => {
  res.redirect(`${BASE}Docs`)
})

app.use(`${BASE}Auth`, router.auth)
app.use(`${BASE}Entity`, router.entity)
app.use(`${BASE}User`, router.user)

app.use('*', errorHandler)

export default app
