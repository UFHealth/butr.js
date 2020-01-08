const fs = require('fs')
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  files: [
    'example/*.html',
    'example/*.js',
    {
      match: ['dist/*.js'],
      fn: (e, file) => {
        fs.copyFile(
          './dist/butr.js',
          './example/butr.js',
          e => { if (e) console.log(e) }
        )
      }
    }
  ],
  watchEvents: [
    'change',
    'add',
    'addDir'
  ],
  watch: true,
  proxy: 'localhost:5000',
  port: 3000,
  notify: false,
  ghostMode: false,
  injectChanges: true
}
