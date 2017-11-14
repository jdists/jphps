
global.processor = require('../')
      

describe("src/index.ts", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }
  
  

  it("processor():base", function () {
    examplejs_printLines = [];
  examplejs_print(JSON.stringify(processor(`
    <b>#{name} - #{age}</b>
  `)))
  assert.equal(examplejs_printLines.join("\n"), "\"\\n    <b><?php echo htmlspecialchars(name) ?> - <?php echo htmlspecialchars(age) ?></b>\\n  \""); examplejs_printLines = [];
  });
          
  it("processor():content is null", function () {
    examplejs_printLines = [];
  examplejs_print(processor(null))
  assert.equal(examplejs_printLines.join("\n"), "null"); examplejs_printLines = [];
  });
          
});
         