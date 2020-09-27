const path = require('path')
const crypto = require('crypto')
const execSync = require('child_process').execSync
const fs = require('fs-extra')
const visit = require('unist-util-visit')

const PLUGIN_NAME = 'remark-nuxt-mermaid'

/**
 * Accepts the `source` of the graph as a string, and render an SVG using
 * mermaid.cli. Returns the path to the rendered SVG.
 *
 * @param  {string} source
 * @param  {string} dirPath
 * @return {string}
 */
function render(source, dirPath) {
  const unique = crypto
    .createHmac('sha1', PLUGIN_NAME)
    .update(source)
    .digest('hex')
  const mmdPath = path.join(dirPath, `${unique}.mmd`)
  const svgFilename = `${unique}.svg`
  const svgPath = path.join(dirPath, svgFilename)

  // Write temporary file
  fs.outputFileSync(mmdPath, source)

  // Invoke mermaid.cli
  execSync(`mmdc -i ${mmdPath} -o ${svgPath} -b transparent`)

  // Clean up temporary file
  fs.removeSync(mmdPath)

  return `/md/${svgFilename}`
}

/**
 * Returns the transformer which acts on the MDAST tree and given VFile.
 *
 * If `options.simple` is passed as a truthy value, the plugin will convert
 * to `<div class="mermaid">` rather than a SVG image.
 *
 * @link https://github.com/unifiedjs/unified#function-transformernode-file-next
 * @link https://github.com/syntax-tree/mdast
 * @link https://github.com/vfile/vfile
 *
 * @return {function}
 */
function mermaid() {
  /**
   * @param {object} ast MDAST
   * @param {vFile} vFile
   * @return {object}
   */
  return function transformer(ast, vFile) {
    visit(ast, 'code', (node, index, parent) => {
      const { lang, value } = node
      const dirPath = path.join(__dirname, '../static/md')

      // If this codeblock is not mermaid, bail.
      if (lang !== 'mermaid') return node

      let graphSvgFilename
      try {
        graphSvgFilename = render(value, dirPath)
        vFile.info(`${lang} code block replaced with graph`, PLUGIN_NAME)
      } catch (error) {
        vFile.message(error, PLUGIN_NAME)
        return node
      }

      const newNode = {
        type: 'image',
        title: '`mermaid` image',
        url: graphSvgFilename,
      }

      parent.children.splice(index, 1, newNode)

      return node
    })
    return ast
  }
}

module.exports = mermaid
