import * as jphps from 'jphps'
import * as jdistsUtil from 'jdists-util'
import * as jsyaml from 'js-yaml'

/**
 * jphps 模板编译
 *
 * @param content 文本内容
 * @return 返回编译后的结果
 * @example processor():base
  ```js
  console.log(JSON.stringify(processor(`
    <b>#{name} - #{age}</b>
  `)))
  // > "\n    <b><?php echo htmlspecialchars(name) ?> - <?php echo htmlspecialchars(age) ?></b>\n  "
  ```
 * @example processor():content is null
  ```js
  console.log(processor(null))
  // > null
  ```
 */
export = (function (content: string): string {
  if (!content) {
    return content
  }
  return jphps.build(content)
}) as jdistsUtil.IProcessor