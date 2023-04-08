import { Dialect } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const Port = process.env.PORT as string
export const Base = process.env.BASE as string
export const DbName = process.env.DB_NAME as string
export const DbDialect: Dialect = process.env.DB_Provider as Dialect
export const Host = process.env.HOST as string
export const DbPassword = process.env.DB_PASSWORD as string
export const DbUser = process.env.DB_USER as string
