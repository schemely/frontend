import type { VBtn } from 'vuetify/components'

type VBtnProps = VBtn['$props']

export interface Button extends /* @vue-ignore */ VBtnProps {
  nuxtIcon?: string
  variation?: 'primary' | 'secondary'
}
