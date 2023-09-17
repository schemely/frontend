import type { VBtn } from 'vuetify/components'

type VBtnProps = VBtn['$props']

export interface ToggleButton extends /* @vue-ignore */ VBtnProps {
  modelValue: boolean
  nuxtIconTrue: string
  nuxtIconFalse: string
}

export interface ToggleButtonEmit {
  (e: 'update:modelValue', value: boolean): void
}
