"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convert(csv) {
    const regex = /^.*$/gm;
    const regexComma = /\;|\,/gm;
    var result = csv.replace(regex, function (match, $1, $2, offset, original) {
        if (match) {
            return "|" + match + "|";
        }
        else {
            return "";
        }
    });
    result = result.replace(regexComma, "|");
    let firstLine = result.split('\n')[0];
    let len = (firstLine.match(/\|/g) || []).length;
    var title = "";
    for (var _i = 0; _i < len - 1; _i++) {
        if (_i === 0) {
            title += "|";
        }
        title += "---|";
    }
    result = result.replace(firstLine, firstLine + "\n" + title);
    return result;
}
exports.convert = convert;
//# sourceMappingURL=core.js.map