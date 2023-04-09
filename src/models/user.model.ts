import bcrypt from 'bcrypt'
import { DataTypes, Model } from 'sequelize'
import { v4 as uuid } from 'uuid'
import sequelize from '../database/database'

export class User extends Model {
  declare id: string
  declare username: string
  declare password: string
  declare email: string
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: (): string => uuid(),
      unique: true
    },
    username: {
      type: DataTypes.STRING(12),
      allowNull: false,
      validate: {
        min: 4,
        max: 12,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        min: 8,
        max: 128,
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    }
  },
  {
    tableName: 'users',
    sequelize
  }
)

User.beforeCreate(async (user: User) => {
  user.password = await bcrypt.hash(user.password, 10)
})

User.beforeUpdate(async (user: User) => {
  user.password = await bcrypt.hash(user.password, 10)
})
