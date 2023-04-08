/* eslint-disable @typescript-eslint/no-unused-vars */
import app from './src/app'
import sequelize from './src/database/database'
import { Entity } from './src/models/index'
import { Port } from './src/types/constants'

const entity = new Entity()

sequelize
  .sync()
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server started on http://localhost:${Port}`)
    })
  })
  .catch((err: Error) => {
    console.log(err.message)
  })
