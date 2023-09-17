import { Model } from 'pinia-orm'
import { Attr, Str, Num, Bool, BelongsTo } from 'pinia-orm/dist/decorators'
import User from '@/entities/user/models/User'

export default class Project extends Model {
  static entity = 'users'

  @Num(null)
  declare id: number | null

  @Str('')
  declare name: string

  @Str('')
  declare slug: string

  @Str(null)
  declare description_short?: string | null

  @Str(null)
  declare description?: string | null

  @Num(0)
  declare stars: number

  @Bool(false)
  declare is_visible: boolean

  @Num(null)
  declare owner_id: number | null

  @BelongsTo(() => User, 'owner_id')
  declare user: User | null

  @Attr('')
  declare created_at: string

  @Attr('')
  declare updated_at: string
}
