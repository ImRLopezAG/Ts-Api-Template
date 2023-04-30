import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/database'

export class User extends Model {
  declare id: string
  declare username: string
  declare password: string
  declare email: string
  toJSON (): Omit<this, 'password'> {
    return Object.assign({}, this.get(), { password: undefined })
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: (): string => crypto.randomUUID(),
      unique: true
    },
    username: {
      type: DataTypes.STRING(12),
      allowNull: false,
      validate: {
        min: 4,
        max: 12,
        notEmpty: true
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      },
      unique: true
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
