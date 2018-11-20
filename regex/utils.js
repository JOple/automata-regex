"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex_to_tree_1 = require("./compile/regex-to-tree");
const tree_to_enfa_1 = require("./compile/tree-to-enfa");
const nfa_to_dfa_1 = require("./compile/nfa-to-dfa");
const minimize_dfa_1 = require("./compile/minimize-dfa");
const dfa_1 = require("../types/dfa");
function compile(regex) {
    let t = regex_to_tree_1.regexToTree(regex);
    let m = tree_to_enfa_1.buildENfa(t);
    let n = nfa_to_dfa_1.nfaToDfa(m);
    let o = minimize_dfa_1.minimizeDfa(n);
    return new dfa_1.Dfa(o);
}
exports.compile = compile;
