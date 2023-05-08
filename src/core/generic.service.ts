import { ReturnModelType } from '@typegoose/typegoose'
import { BaseEntity } from '@/models/base.entity'
import { IGenericService, Schema } from '@/utils/constants'

export abstract class GenericService<TEntity extends BaseEntity> implements IGenericService<TEntity> {
  protected constructor (private readonly model: ReturnModelType<any>) {}

  async GetAll (): Promise<TEntity[]> {
    const entities = await this.model.find().exec()
    return entities
  }

  async Get (id: string | number): Promise<TEntity | null> {
    const entity = await this.model.findById(id).exec()
    return entity ?? null
  }

  async Create (entity: TEntity): Promise<TEntity> {
    try {
      const created = await this.model.create(entity)
      return created
    } catch (e) {
      throw new Error('Error while creating entity')
    }
  }

  async Update (id: string | number, entity: Partial<TEntity>): Promise<TEntity> {
    const updatedEntity = await this.model.findByIdAndUpdate(id, entity).exec()
    if (updatedEntity) {
      const newEntity = await this.model.findById(id).exec()
      return newEntity ?? updatedEntity
    }
    throw new Error(`${this.model.modelName} not found`)
  }

  async Delete (id: string | number): Promise<void> {
    try {
      const deletedEntity = await this.model.findByIdAndDelete(id).exec()
      if (!deletedEntity) {
        throw new Error(`${this.model.modelName} not found`)
      }
    } catch (error) {
      console.log(error)
      throw new Error('Internal server error')
    }
  }

  GetSchema (): Schema[] {
    const schemaPaths = this.model.schema.paths
    const schema: Schema[] = Object.keys(schemaPaths).map((field: string) => {
      const schemaPath = schemaPaths[field]
      return {
        field,
        allowNull: !schemaPath.isRequired
      }
    })
    return schema.filter(f => f.allowNull === false && f.field !== 'createdAt' && f.field !== 'updatedAt' && f.field !== '_id')
  }
}
