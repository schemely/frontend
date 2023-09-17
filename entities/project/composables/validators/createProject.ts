import { required, maxLength } from '@vuelidate/validators'

export const useCreateProjectValidator = () => {
  const slug = useSlugValidator()
  const unique = useUniqueValidator()

  const rules = {
    name: {
      required,
      maxLength: maxLength(50),
    },
    slug: {
      required,
      maxLength: maxLength(50),
      slug,
      unique: unique('/projects/slug-available'),
    },
    description_short: { maxLength: maxLength(255) },
    description: {},
    is_visible: {},
  }

  return rules
}
