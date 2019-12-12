import {
  body,
  h1
} from '@frontj/elements'
import {
  Head,
  Html
} from './components'

export const Top = () => Html(
  Head(),
  body(
    h1('frontJ')
  )
)
