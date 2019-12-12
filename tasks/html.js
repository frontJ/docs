const { src } = require('gulp')
const eslint = require('gulp-eslint')
const { exec } = require('child_process')

exports.lint = () => src('src/**/*.ts')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())

exports.build = (done) => {
  exec('npm run _build:html', (err) => {
    if (err) throw err
    done()
  })
}
