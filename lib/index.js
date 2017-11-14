"use strict";
var jphps = require("jphps");
module.exports = (function (content) {
    if (!content) {
        return content;
    }
    return jphps.build(content);
});
