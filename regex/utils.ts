import { regexToTree } from "./compile/regex-to-tree";
import { buildENfa } from "./compile/tree-to-enfa";
import { nfaToDfa } from "./compile/nfa-to-dfa";
import { minimizeDfa } from "./compile/minimize-dfa";
import { Dfa } from "../types/dfa";

export function compile(regex: string): Dfa {
    let t = regexToTree(regex)
    let m = buildENfa(t)
    let n = nfaToDfa(m)
    let o = minimizeDfa(n)
    return new Dfa(o)
}