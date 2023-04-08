import { DataTypes, Model } from 'sequelize'
import { v4 as uuid } from 'uuid'
import sequelize from '../database/database'

export class Entity extends Model {
  declare id: string
  declare name: string
}

Entity.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: (): string => uuid(),
      unique: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    tableName: 'users',
    sequelize
  }
)
