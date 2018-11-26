"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function matcher0(dfa) {
    return str => {
        let state = dfa.startState;
        for (let ch of str) {
            state = dfa.transition(state, ch);
            if (!state)
                return false;
        }
        return dfa.isFinalState(state);
    };
}
exports.matcher0 = matcher0;
function matcher(regex) {
    return matcher0(utils_1.compile(regex));
}
exports.matcher = matcher;
function finderGreedy(dfa) {
    let matcher = matcher0(dfa);
    return function* (str) {
        let len = str.length;
        for (let start = 0; start < len; start++) {
            for (let end = start + 1; end <= len; end++) {
                let substr = str.substring(start, end);
                if (matcher(substr)) {
                    yield {
                        text: substr,
                        start: start,
                        end: end
                    };
                }
            }
        }
    };
}
exports.finderGreedy = finderGreedy;
function finderMax(dfa) {
    let matcher = matcher0(dfa);
    return function* (str) {
        let len = str.length;
        for (let start = 0; start < len; start++) {
            for (let end = len; end >= start + 1; end--) {
                let substr = str.substring(start, end);
                if (matcher(substr)) {
                    yield {
                        text: substr,
                        start: start,
                        end: end
                    };
                    start = end - 1;
                    break;
                }
            }
        }
    };
}
exports.finderMax = finderMax;
function finder(regex, greedy = false) {
    return (greedy ? finderGreedy : finderMax)(utils_1.compile(regex));
}
exports.finder = finder;
