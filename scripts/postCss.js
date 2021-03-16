const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const postcssCustomProperties = require('postcss-custom-properties')
const removeRules = require('postcss-remove-rules')
const comments = require('postcss-discard-comments')
const fs = require('fs')

fs.readFile('src/style.css', (err, css) => {
  postcss([autoprefixer, postcssCustomProperties, comments])
    .use(comments({
      remove: function(comment) { return comment[0] == "@"; }
    }))
    .use(removeRules({
      rulesToRemove: {
        ':root': '*'
      }
    }))
    .process(css, { from: 'src/style.css', to: 'src/style.css' })
    .then(result => {
      fs.writeFile('src/style.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('src/style.map', result.map, () => true)
      }
    })
})

fs.readFile('src/style-banner.css', (err, css) => {
  postcss([autoprefixer, postcssCustomProperties, comments])
    .use(comments({
      remove: function(comment) { return comment[0] == "@"; }
    }))
    .use(removeRules({
      rulesToRemove: {
        ':root': '*'
      }
    }))
    .process(css, { from: 'src/style-banner.css', to: 'src/style-banner.css' })
    .then(result => {
      fs.writeFile('src/style-banner.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('src/style-banner.map', result.map, () => true)
      }
    })
})
