import slugify from 'slugify'
import Project from '@/entities/project/models/Project'
import ProjectRepository from '@/entities/project/repositories/Project'
import { useSnackbarStore } from '@/entities/snackbar/stores/snackbar'

export const useCreateProjectStore = defineStore('createProject', () => {
  const snackbarStore = useSnackbarStore()
  const { show: showSnackbar } = snackbarStore
  const rules = useCreateProjectValidator()

  const project = reactive({
    name: '',
    slug: '',
    description_short: '',
    description: '',
    is_visible: false,
  })

  const $externalResults = ref({})
  const commonErrors = ref<string[]>([])

  const v$ = useVuelidate(rules, project, { $autoDirty: true, $externalResults })

  const isSlugify = ref(true)
  const isLoading = ref(false)

  watch(
    () => project.name,
    () => {
      if (!isSlugify.value) return
      project.slug = slugify(project.name.toLowerCase())
    }
  )

  async function create() {
    isLoading.value = true

    commonErrors.value = []

    if (await v$.value.$validate()) {
      try {
        const projectData = await useRepo(ProjectRepository).create<Project>(project)
        const projectEntity = useRepo(Project).save(projectData)
        showSnackbar(`"${projectEntity.name}" project has been added successfully!`, 'success')
        await navigateTo('/my/projects')
      } catch (e) {
        useErrorHandler(e, $externalResults, commonErrors)
      }
    }

    isLoading.value = false
  }

  return { rules, project, v$, isSlugify, isLoading, $externalResults, commonErrors, create }
})
