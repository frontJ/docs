const browserSync = require('browser-sync').create()

exports.serve = (done) => {
  browserSync.init({
    server: './dist',
    notify: false,
    ghostMode: false
  })
  done()
}

exports.reload = (done) => {
  browserSync.reload()
  done()
}
