const { series } = require('gulp')
const htmlTasks = require('./html')
const cssTasks = require('./css')

const html = series(htmlTasks.lint, htmlTasks.build)
const css = series(cssTasks.lint, cssTasks.build)

exports.build = series(
  html,
  css
)
