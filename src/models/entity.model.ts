import { DataTypes, Model } from 'sequelize'
import crypto from 'crypto'
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
      defaultValue: (): string => crypto.randomUUID(),
      unique: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    tableName: 'entities',
    sequelize
  }
)
