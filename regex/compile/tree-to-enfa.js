"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../types/models");
const nfa_1 = require("../../types/nfa");
function buildENfa(tree) {
    let m = new nfa_1.Nfa();
    let startState = m.newState();
    m.newStart(startState);
    let finalState = buildExpression(m, startState, tree);
    m.newFinal(finalState);
    return m;
}
exports.buildENfa = buildENfa;
function buildExpression(m, s, c) {
    //console.log("buildExpression: " + s + " text: " + c.text)
    let es = [];
    for (let term of c.term()) {
        let s0 = m.newState();
        m.newTransition(s, s0, models_1.EPS);
        let e0 = buildTerm(m, s0, term);
        es.push(e0);
    }
    let e = m.newState();
    for (let e0 of es)
        m.newTransition(e0, e, models_1.EPS);
    return e;
}
function buildTerm(m, s, c) {
    //console.log("buildTerm: " + s + " text: " + c.text)
    let s0 = s;
    for (let factor of c.factor())
        s0 = buildFactor(m, s0, factor);
    return s0;
}
function buildFactor(m, s, c) {
    //console.log("buildFactor: " + s + " text: " + c.text)
    if (c.atom())
        return buildAtom(m, s, c.atom());
    if (c.qmark())
        return buildQmark(m, s, c.qmark());
    if (c.plus())
        return buildPlus(m, s, c.plus());
    if (c.star())
        return buildStar(m, s, c.star());
    throw new Error("Logic Error: The code should not reach this place");
}
function buildAtom(m, s, c) {
    //console.log("buildAtom: " + s + " text: " + c.text)
    if (c.CHAR())
        return buildChar(m, s, c.CHAR());
    if (c.group())
        return buildGroup(m, s, c.group());
    if (c.set())
        return buildSet(m, s, c.set());
    // if (c.ANY()) {
    //     console.error("Illegal Token: " + c.ANY().text)
    //     return s
    // }
    throw new Error("Logic Error: The code should not reach this place");
}
function buildChar(m, s, c) {
    let e = m.newState();
    m.newTransition(s, e, buildTerminal(c));
    return e;
}
function buildTerminal(n) {
    let text = n.text;
    switch (text) {
        case "\\*": return "*";
        case "\\+": return "+";
        case "\\(": return "(";
        case "\\)": return ")";
        case "\\[": return "[";
        default: return text;
    }
}
function buildGroup(m, s, c) {
    return buildExpression(m, s, c.expression());
}
function buildSet(m, s, c) {
    return c.CARET() ? buildSetNegative(m, s, c) : buildSetPositive(m, s, c);
}
function buildSetPositive(m, s, c) {
    return buildCharacterRange(m, s, c.characterRange());
}
function buildSetNegative(m, s, c) {
    throw new Error("Not Yet Implemented: Negative set has no implementation yet");
    // buildCharacterRange(m, s, c.characterRange());
    // return s
}
function buildCharacterRange(m, s, c) {
    let es = [];
    let a = (c.beginCharacter().CHAR() + "").charCodeAt(0);
    let b = (c.endCharacter().CHAR() + "").charCodeAt(0);
    let start = a;
    let end = b;
    if (b < a) {
        start = b;
        end = a;
    }
    for (let i = start; i <= end; i++) {
        let ch = String.fromCharCode(i);
        let e0 = m.newState();
        m.newTransition(s, e0, ch);
        es.push(e0);
    }
    let e = m.newState();
    for (let e0 of es)
        m.newTransition(e0, e, models_1.EPS);
    return e;
}
function buildQmark(m, s, c) {
    let s0 = m.newState();
    m.newTransition(s, s0, models_1.EPS);
    let e = buildAtom(m, s0, c.atom());
    m.newTransition(s, e, models_1.EPS);
    return e;
}
function buildPlus(m, s, c) {
    let s0 = m.newState();
    m.newTransition(s, s0, models_1.EPS);
    let e = buildAtom(m, s0, c.atom());
    m.newTransition(e, s0, models_1.EPS);
    return e;
}
function buildStar(m, s, c) {
    let s0 = m.newState();
    m.newTransition(s, s0, models_1.EPS);
    let e = buildAtom(m, s0, c.atom());
    m.newTransition(e, s0, models_1.EPS);
    m.newTransition(s, e, models_1.EPS);
    return e;
}
