"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.deepCopy = deepCopy;
function jsonPrint(obj, space = 4) {
    console.log(JSON.stringify(obj, null, space));
}
exports.jsonPrint = jsonPrint;
