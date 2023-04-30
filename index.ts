/* eslint-disable @typescript-eslint/no-unused-vars */
import app from '@/app'
import sequelize from '@/database/database'
import { Entity, User } from '@/models'
import { PORT } from '@/utils/constants'

const entity = new Entity()
const user = new User()

sequelize
  .sync(/* { alter: true } */)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err.message)
  })
