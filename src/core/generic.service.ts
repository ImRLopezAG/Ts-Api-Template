import { IGenericService, Schema } from '@/utils/constants'
import { Model, ModelStatic } from 'sequelize'

export abstract class GenericService<TEntity extends Model> implements IGenericService<TEntity> {
  protected constructor (private readonly model: ModelStatic<TEntity>) {}

  async GetAll (): Promise<TEntity[]> {
    return await this.model.findAll()
  }

  async Get (id: string | number): Promise<TEntity | null> {
    return await this.model.findByPk(id)
  }

  async Create (entity: TEntity): Promise<TEntity> {
    try {
      return await this.model.create(entity instanceof this.model ? entity.get() : entity)
    } catch (e) {
      throw new Error('Error while creating entity')
    }
  }

  async Update (id: string | number, entity: Partial<TEntity>): Promise<TEntity> {
    const item = await this.model.findByPk(id)
    if (item != null) {
      await item.update(entity)
      return item
    }
    throw new Error(`${this.model.name} not found`)
  }

  async Delete (id: string | number): Promise<void> {
    try {
      const entity = await this.model.findByPk(id)
      if (entity != null) {
        await entity.destroy()
        return
      }
      throw new Error(`${this.model.name} not found`)
    } catch (error) {
      console.log(error)
      throw new Error('Internal server error')
    }
  }

  GetSchema (): Schema[] {
    const fields = this.model.rawAttributes
    const schema: Schema[] = Object.keys(fields).map((field: string) => {
      const type = fields[field].field
      return {
        field: type,
        allowNull: fields[field].allowNull
      }
    })
    return schema.filter(f => f.allowNull === false && f.field !== 'createdAt' && f.field !== 'updatedAt')
  }
}
