import type { Snackbar } from '@/entities/snackbar/interfaces/Snackbar'

export const useSnackbarStore = defineStore('snackbar', () => {
  const model = ref(false)
  const content = ref('')
  const state = ref<Snackbar['state']>()

  function show(text: string, _state?: Snackbar['state']) {
    content.value = text
    model.value = true
    state.value = _state
  }

  return { model, content, state, show }
})
