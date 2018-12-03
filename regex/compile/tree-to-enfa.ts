import { State, EPS } from "../../types/models"
import { Nfa } from "../../types/nfa"

import { CommonTokenStream } from "antlr4ts/CommonTokenStream"
import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream"
import { TerminalNode } from "antlr4ts/tree/TerminalNode"

import { RegexLexer } from "../../grammar/out/RegexLexer"
import { RegexParser, ExpressionContext, TermContext, FactorContext, AtomContext, PlusContext, StarContext, SetContext, GroupContext, QmarkContext, CharacterRangeContext } from "../../grammar/out/RegexParser"

import { regexToTree, RegexTree } from "./regex-to-tree";



export function buildENfa(tree: RegexTree) {
    let m = new Nfa()

    let startState = m.newState()
    m.newStart(startState)

    let finalState = buildExpression(m, startState, tree)
    m.newFinal(finalState)

    return m
}

function buildExpression(m: Nfa, s: State, c: ExpressionContext): State {
    //console.log("buildExpression: " + s + " text: " + c.text)

    let es: string[] = []

    for (let term of c.term()) {
        let s0 = m.newState()
        m.newTransition(s, s0, EPS)
        let e0 = buildTerm(m, s0, term)
        es.push(e0)
    }

    let e = m.newState()
    for (let e0 of es)
        m.newTransition(e0, e, EPS)

    return e
}
function buildTerm(m: Nfa, s: State, c: TermContext): State {
    //console.log("buildTerm: " + s + " text: " + c.text)

    let s0 = s
    for (let factor of c.factor())
        s0 = buildFactor(m, s0, factor)

    return s0
}
function buildFactor(m: Nfa, s: State, c: FactorContext): State {
    //console.log("buildFactor: " + s + " text: " + c.text)

    if (c.atom())
        return buildAtom(m, s, c.atom())
    if (c.qmark())
        return buildQmark(m, s, c.qmark())
    if (c.plus())
        return buildPlus(m, s, c.plus())
    if (c.star())
        return buildStar(m, s, c.star())

    throw new Error("Logic Error: The code should not reach this place")
}
function buildAtom(m: Nfa, s: State, c: AtomContext): State {
    //console.log("buildAtom: " + s + " text: " + c.text)
    if (c.CHAR())
        return buildChar(m, s, c.CHAR())
    if (c.group())
        return buildGroup(m, s, c.group())
    if (c.set())
        return buildSet(m, s, c.set())
    // if (c.ANY()) {
    //     console.error("Illegal Token: " + c.ANY().text)
    //     return s
    // }
    throw new Error("Logic Error: The code should not reach this place")
}
function buildChar(m: Nfa, s: State, c: TerminalNode): State {
    let e = m.newState()
    m.newTransition(s, e, buildTerminal(c))
    return e
}
function buildTerminal(n: TerminalNode): string {
    let text = n.text
    switch (text) {
        case "\\*": return "*"
        case "\\+": return "+"
        case "\\(": return "("
        case "\\)": return ")"
        case "\\[": return "["
        case "\\-": return "-"
        default: return text
    }
}
function buildGroup(m: Nfa, s: State, c: GroupContext): State {
    return buildExpression(m, s, c.expression());
}
function buildSet(m: Nfa, s: State, c: SetContext): State {
    return c.CARET() ? buildSetNegative(m, s, c) : buildSetPositive(m, s, c)
}
function buildSetPositive(m: Nfa, s: State, c: SetContext): State {
    return buildCharacterRange(m, s, c.characterRange());
}
function buildSetNegative(m: Nfa, s: State, c: SetContext): State {
    throw new Error("Not Yet Implemented: Negative set has no implementation yet")
    // buildCharacterRange(m, s, c.characterRange());
    // return s
}
function buildCharacterRange(m: Nfa, s: State, c: CharacterRangeContext): State {
    let es: string[] = []

    let a = (c.beginCharacter().CHAR() + "").charCodeAt(0)
    let b = (c.endCharacter().CHAR() + "").charCodeAt(0)

    let start = a
    let end = b

    if (b < a) {
        start = b
        end = a
    }

    for (let i = start; i <= end; i++) {
        let ch = String.fromCharCode(i)
        let e0 = m.newState()

        m.newTransition(s, e0, ch)

        es.push(e0)
    }

    let e = m.newState()
    for (let e0 of es)
        m.newTransition(e0, e, EPS)

    return e;
}
function buildQmark(m: Nfa, s: State, c: QmarkContext): State {
    let s0 = m.newState()
    m.newTransition(s, s0, EPS)

    let e = buildAtom(m, s0, c.atom())
    m.newTransition(s, e, EPS)

    return e
}
function buildPlus(m: Nfa, s: State, c: PlusContext): State {
    let s0 = m.newState()
    m.newTransition(s, s0, EPS)

    let e = buildAtom(m, s0, c.atom())
    m.newTransition(e, s0, EPS)

    return e
}
function buildStar(m: Nfa, s: State, c: StarContext): State {
    let s0 = m.newState()
    m.newTransition(s, s0, EPS)

    let e = buildAtom(m, s0, c.atom())
    m.newTransition(e, s0, EPS)

    m.newTransition(s, e, EPS)

    return e
}



