import { Model } from 'pinia-orm'
import { Attr, Str, Num, HasMany } from 'pinia-orm/dist/decorators'
import Project from '@/entities/project/models/Project'

export default class User extends Model {
  static entity = 'users'

  @Num(null)
  declare id: number | null

  @Str(null)
  declare email?: string | null

  @Str('')
  declare avatar_url: string

  @Num(null)
  declare github_id?: number | null

  @Str('')
  declare github_login: string

  @Str(null)
  declare github_token?: string | null

  @Str(null)
  declare remember_me_token?: string | null

  @HasMany(() => Project, 'owner_id')
  declare projects: Project[]

  @Attr('')
  declare created_at: string

  @Attr('')
  declare updated_at: string
}
