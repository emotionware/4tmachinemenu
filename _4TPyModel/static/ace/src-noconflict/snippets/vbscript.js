ace.define("ace/snippets/vbscript",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText ="Prototipos \n\

snippet test\n\
	${1:Hola Mundo};\n\

";
exports.scope = "vbscript";

});                (function() {
                    ace.require(["ace/snippets/vbscript"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            