const { src, dest } = require('gulp')
const del = require('del')

exports.build = () => src('src/assets/img/**/*', { base: 'src' })
  .pipe(dest('dist'))

exports.clean = (done) => {
  del('dist/assets/img').then(() => done())
}
