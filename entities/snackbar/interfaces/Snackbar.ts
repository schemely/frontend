import type { VSnackbar } from 'vuetify/components'

type VSnackbarProps = VSnackbar['$props']

export interface Snackbar extends /* @vue-ignore */ VSnackbarProps {
  state?: 'default' | 'success' | 'error'
}
