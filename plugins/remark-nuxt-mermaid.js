const path = require('path')
const crypto = require('crypto')
const execSync = require('child_process').execSync
const fs = require('fs-extra')
const visit = require('unist-util-visit')

const PLUGIN_NAME = 'remark-nuxt-mermaid'

/**
 * 接收 mermaid 风格的 md 源码，利用 mermaid.cli 绘制 svg
 * 返回 svg 的编码
 *
 * @param  {string} source
 * @return {string}
 */
function render(source) {
  const unique = crypto
    .createHmac('sha1', PLUGIN_NAME)
    .update(source)
    .digest('hex')
  const mmdPath = path.join(__dirname, `${unique}.mmd`)
  const svgPath = path.join(__dirname, `${unique}.svg`)

  let svgSource
  try {
    // 生成 mmd 文件
    fs.outputFileSync(mmdPath, source)

    // mermaid.cli 生成 svg 文件
    execSync(`mmdc -i ${mmdPath} -o ${svgPath} -b transparent`)
    svgSource = fs.readFileSync(svgPath, 'utf-8')

    // 清空临时文件
    fs.removeSync(mmdPath)
    fs.removeSync(svgPath)
  } catch (error) {
    console.error('Error!!! Render SVG Rendering Failed')
  }

  return svgSource
}

/**
 * 返回作用于MDAST树和给定VFile的转换器
 *
 * @link https://github.com/syntax-tree/unist-util-visit
 * @link https://github.com/syntax-tree/mdast#html
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
      if (lang !== 'mermaid') return node

      let svgSource
      try {
        svgSource = render(value)
        vFile.info(`${lang} code block replaced with graph`, PLUGIN_NAME)
        const newNode = {
          type: 'html',
          value: svgSource,
        }
        parent.children.splice(index, 1, newNode)
      } catch (error) {
        vFile.message(error, PLUGIN_NAME)
        return node
      }
    })
    return ast
  }
}

module.exports = mermaid
