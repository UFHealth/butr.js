#!/usr/bin/env node
const fs = require('fs')
const revHash = require('rev-hash')
const glob = require('glob')
const isDev = process.env.NODE_ENV === 'development'

/*
  Settings
*/
const manifestPath = 'dist/manifest.json'
const pattern = 'dist/**/*.{jpg,png,js,css,svg}'

/*
  Empty manifest
*/
const manifest = {}

/*
  Create manifest (map) object
*/
const createManifestObject = () => {
  return new Promise(resolve => {
    glob(pattern, {}, (err, files) => {
      if (err) console.log(err)
      else {
        files.forEach((file, i) => {
          // Only use the filename, don't get full path
          const fileName = file.substring(file.lastIndexOf('/') + 1 || 0)
          // Generate hash from file contents, otherwise we are hashing the filename
          const hash = revHash(fs.readFileSync(file))
          // Insert the query string id as hash of file contents
          // { filename: filename?hash }
          manifest[fileName] = isDev
            ? fileName
            : fileName + '?id=' + hash
          // Task is finished
          if (i === files.length - 1) resolve()
        })
      }
    })
  })
}

/*
  Transform Object to JSON and write to filesystem
*/
const transformToJSON = () => {
  fs.writeFileSync(manifestPath, JSON.stringify(manifest))
}

createManifestObject()
  .then(() => {
    transformToJSON()
  })
