import { getModelForClass, prop } from '@typegoose/typegoose'
import { BaseEntity } from './base.entity'

export class Entity extends BaseEntity {
  @prop()
  declare name: string
}

export const EntityModel = getModelForClass(Entity)
