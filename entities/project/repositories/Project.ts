import { Repository } from 'pinia-orm'
import { create } from '@/shared/orm/repositoryMethods'
import Project from '@/entities/project/models/Project'

export default class ProjectRepository extends Repository {
  public use = Project

  public urls = {
    create: '/projects',
  }

  public create = create
}
