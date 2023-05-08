/* eslint-disable @typescript-eslint/no-unused-vars */
import app from '@/app'
import { connectDatabase } from '@/database/database'
import { EntityModel, UserModel } from '@/models'
import { PORT } from '@/utils/constants'

connectDatabase()
  .then(() => {
    const category = new EntityModel()
    const user = new UserModel()

    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err.message)
  })
