import type { VTextField } from 'vuetify/components'

type VTextFieldProps = VTextField['$props']

export interface Input extends /* @vue-ignore */ VTextFieldProps {
  size?: 'small' | 'default' | 'large'
}
