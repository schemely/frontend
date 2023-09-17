import type { ServerErrorResponse } from '@/shared/interfaces/ServerErrorResponse'

export const useErrorHandler = (
  e: any,
  $externalResults: Ref,
  commonErrors: Ref<string[]> = ref([])
) => {
  const response: ServerErrorResponse = e.data
  const errors: { [key: string]: string[] } = {}
  response.errors.forEach((error) => {
    if (error.field) {
      if (!(error.field in errors)) errors[error.field] = []
      errors[error.field].push(error.message)
    } else {
      commonErrors.value.push(error.message)
    }
  })

  $externalResults.value = errors
}
