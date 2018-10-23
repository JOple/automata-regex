import { buildENfa } from "./regex/tree-to-enfa";
import { nfaToDfa } from "./regex/nfa-to-dfa";
import { minimizeDfa } from "./regex/minimize-dfa";
import { DfaModel } from "./types/models";
import { regexToTree } from "./regex/regex-to-tree";

function print(a) {
    console.log(JSON.stringify(a, null, 4))
}
function compile(regex: string): DfaModel {
    let t = regexToTree(regex)
    let m = buildENfa(t)
    let n = nfaToDfa(m)
    let o = minimizeDfa(n)
    return o
}
function cp(regex: string) {
    console.log("___________________________________")
    console.log(regex)
    print(compile(regex))
    console.log("___________________________________")
}

/**
 * Uncomment the following statements to print the transition tables
 */

cp("(a|b)*abb")
// cp("(M|m)(A|a)(Y|y)(N|n)(A|a)(R|r)(D|d)")
// cp("(0|1)*1(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)")
// cp("[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?")