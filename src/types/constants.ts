import dotenv from 'dotenv'
import { Dialect } from 'sequelize'

dotenv.config()

export const PORT = process.env.PORT as string
export const BASE = process.env.BASE as string
export const DBNAME = process.env.DB_NAME as string
export const DBDIALECT: Dialect = process.env.DB_Provider as Dialect
export const HOST = process.env.HOST as string
export const DBPASSWORD = process.env.DB_PASSWORD as string
export const DBUSER = process.env.DB_USER as string
export const SECRET = process.env.JWT_SECRET as string
