"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_to_enfa_1 = require("./regex/tree-to-enfa");
const nfa_to_dfa_1 = require("./regex/nfa-to-dfa");
const minimize_dfa_1 = require("./regex/minimize-dfa");
const regex_to_tree_1 = require("./regex/regex-to-tree");
function print(a) {
    console.log(JSON.stringify(a, null, 4));
}
function compile(regex) {
    let t = regex_to_tree_1.regexToTree(regex);
    let m = tree_to_enfa_1.buildENfa(t);
    let n = nfa_to_dfa_1.nfaToDfa(m);
    let o = minimize_dfa_1.minimizeDfa(n);
    return o;
}
function cp(regex) {
    console.log("___________________________________");
    console.log(regex);
    print(compile(regex));
    console.log("___________________________________");
}
// cp("(a|b)*abb")
// cp("(M|m)(A|a)(Y|y)(N|n)(A|a)(R|r)(D|d)")
// cp("(0|1)*1(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)")
// cp("[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?")
cp("[a-a]");
