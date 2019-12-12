import { attrs } from 'frontj'
import {
  html
} from '@frontj/elements'

export const Html = (...contents: string[]) => html(
  attrs('[lang="ja"]'),
  ...contents
)
