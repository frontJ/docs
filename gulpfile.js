const { series, watch } = require('gulp')
const htmlTasks = require('./tasks/html')
const cssTasks = require('./tasks/css')
const { serve, reload } = require('./tasks/server')
const { build } = require('./tasks/build')

const html = series(htmlTasks.lint, htmlTasks.build)
const css = series(cssTasks.lint, cssTasks.build)

exports.html = html
exports.lintHtml = htmlTasks.lint
exports.css = css
exports.lintCss = cssTasks.lint
exports.serve = serve
exports.lint = series(htmlTasks.lint, cssTasks.lint)
exports.build = build

exports.default = series(
  build,
  serve,
  () => {
    watch('./src/**/*.ts', series(html, reload)),
    watch('./src/**/*.scss', series(css, reload))
  }
)
