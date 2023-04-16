/* eslint-disable @typescript-eslint/no-unused-vars */
import app from './src/app'
import sequelize from './src/database/database'
import { Entity, User } from './src/models'
import { PORT } from './src/types/constants'

const entity = new Entity()
const user = new User()

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err.message)
  })
