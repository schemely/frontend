import type { ComponentsOptions } from '@nuxt/schema'

const pathPrefix = false
const pattern = '*/ui/**/*.vue'

const components: ComponentsOptions['dirs'] = [
  {
    path: '@/widgets',
    prefix: 'Widget',
    pathPrefix,
    pattern,
  },
  {
    path: '@/features',
    prefix: 'Feature',
    pathPrefix,
    pattern,
  },
  {
    path: '@/entities',
    prefix: 'Entity',
    pathPrefix,
    pattern,
  },
  {
    path: '@/shared',
    prefix: 'UI',
    pathPrefix,
    pattern,
  },
]

export default components
