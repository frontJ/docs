import { build } from '@frontj/builder'
import { Top } from './pages/index'

build({
  routes: {
    '/': Top()
  }
})
