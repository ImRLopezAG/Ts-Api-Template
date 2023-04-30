import { PORT } from '@/utils/constants'
import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc'

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'Ts Api Template',
    version: '1.5',
    description:
      'This is an API template made with express and typescript, to speed up your development, it contains repositories and generic services for the typical CRUD actions, based on a Sequelize model, we use it for data persistence',
    contact: {
      name: 'Angel Lopez',
      url: 'https://imrlopez.dev'
    }
  },
  servers: [
    {
      url: `http://localhost:${PORT}`
    }
  ],
  components: {
    securitySchemes: {
      Bearer: {
        type: 'http',
        scheme: 'Bearer',
        in: 'header',
        description: 'JWT Authorization header using the Bearer scheme.',
        bearerFormat: 'JWT'
      }
    }
  }
}

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ['src/docs/*.ts'],
  explorer: true,
  security: [{ Bearer: [] }]
}

export const swaggerSetup = swaggerJSDoc(swaggerOptions)
