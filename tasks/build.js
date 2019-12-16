const { series } = require('gulp')
const htmlTasks = require('./html')
const cssTasks = require('./css')
const imgTasks = require('./img')

const html = series(htmlTasks.lint, htmlTasks.build)
const css = series(cssTasks.lint, cssTasks.build)
const img = series(imgTasks.clean, imgTasks.build)

exports.build = series(
  html,
  css,
  img
)
