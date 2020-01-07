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
    'dist/css/*.css',
    'docs/public/css/*.css',
    'dist/js/*.js',
    'docs/templates/**/*.twig'
  ],
  watchEvents: [
    'change',
    'add',
    'addDir'
  ],
  watch: true,
  proxy: 'localhost:8000',
  port: 3000,
  notify: false,
  ghostMode: false,
  injectChanges: true
}
