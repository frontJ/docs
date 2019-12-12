import { attrs } from 'frontj'
import {
  head,
  meta,
  title,
  LoadCss
} from '@frontj/elements'
import * as site from '../../data/site'

interface Options {
  title?: string;
  content?: number;
}

const initialOptions: Options = {
  title: site.title
}

export const Head = (options = initialOptions) => head(
  meta(attrs('[charset="UTF-8"]')),
  meta(attrs('[name="viewport"][content="width=device-width, initial-scale=1.0"]')),
  meta(attrs('[http-equiv="X-UA-Compatible"][content="ie=edge"]')),
  title(options.title),
  meta(attrs(`[name="description"][content="${site.description}"]`)),
  LoadCss('/assets/css/style.css')
)
