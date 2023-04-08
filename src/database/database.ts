import { Sequelize } from 'sequelize'
import { DbDialect, DbName, DbPassword, DbUser, Host } from '../types/constants'

const sequelize: Sequelize = new Sequelize(DbName, DbUser, DbPassword, {
  host: Host,
  dialect: DbDialect
})

export default sequelize
