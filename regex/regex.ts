import { Dfa } from "../types/dfa";
import { compile } from "./utils";

export interface StringOperator<T> {
    (str: string): T
}

export interface StringMatcher extends StringOperator<boolean> { }

export function matcher0(dfa: Dfa): StringMatcher {
    return str => {
        let state = dfa.startState
        for (let ch of str) {
            state = dfa.transition(state, ch)
            if (!state) return false
        }
        return dfa.isFinalState(state)
    }
}
export function matcher(regex: string) {
    return matcher0(compile(regex))
}


export interface StringPortion {
    text: string
    start: number
    end: number
}
export interface StringFinder extends StringOperator<IterableIterator<StringPortion>> { }

export function finderGreedy(dfa: Dfa): StringFinder {
    let matcher = matcher0(dfa)
    return function* (str) {
        let len = str.length
        for (let start = 0; start < len; start++) {
            for (let end = start + 1; end <= len; end++) {
                let substr = str.substring(start, end)
                if (matcher(substr)) {
                    yield {
                        text: substr,
                        start: start,
                        end: end
                    }
                }
            }
        }
    }
}
export function finderMax(dfa: Dfa): StringFinder {
    let matcher = matcher0(dfa)
    return function* (str) {
        let len = str.length
        for (let start = 0; start < len; start++) {
            for (let end = len; end >= start + 1; end--) {
                let substr = str.substring(start, end)
                if (matcher(substr)) {
                    yield {
                        text: substr,
                        start: start,
                        end: end
                    }
                    start = end - 1
                    break
                }
            }
        }
    }
}
export function finder(regex: string, greedy = false) {
    return (greedy ? finderGreedy : finderMax)(compile(regex))
}
