import { Sequelize } from 'sequelize'
import { DBDIALECT, DBNAME, DBPASSWORD, DBUSER, HOST } from '../types/constants'

const sequelize: Sequelize = new Sequelize(DBNAME, DBUSER, DBPASSWORD, {
  host: HOST,
  dialect: DBDIALECT
})

export default sequelize
