import { Dfa } from "../types/dfa";
import { regexToTree } from "./regex-to-tree";
import { buildENfa } from "./tree-to-enfa";
import { nfaToDfa } from "./nfa-to-dfa";
import { minimizeDfa } from "./minimize-dfa";


function compile(regex: string): Dfa {
    let t = regexToTree(regex)
    let m = buildENfa(t)
    let n = nfaToDfa(m)
    let o = minimizeDfa(n)
    return new Dfa(o)
}

export class Regex {

    private _dfa: Dfa

    private constructor(regex: string) {
        this._dfa = compile(regex)
    }

    public static compile(regex: string): Regex {
        return new Regex(regex)
    }
}