"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/utils");
class Dfa {
    constructor(model) {
        model = model || { startState: "", finalStates: [], transitions: {} };
        this.startState = utils_1.deepCopy(model.startState || "");
        this.finalStates = utils_1.deepCopy(model.finalStates || []);
        this.transitions = utils_1.deepCopy(model.transitions || {});
    }
    isStartState(state) {
        return this.startState == state;
    }
    isFinalState(state) {
        return new Set(this.finalStates).has(state);
    }
    transition(state, input) {
        return this.transitions[state][input];
    }
    newState() {
        let i = Object.keys(this.transitions).length;
        while (this.transitions["" + i])
            i++;
        this.transitions["" + i] = {};
        return "" + i;
    }
    newStart(state) {
        this.startState = state;
    }
    newFinal(state) {
        if (this.finalStates.indexOf(state) == -1)
            this.finalStates.push(state);
        if (!this.transitions[state])
            this.transitions[state] = {};
    }
    newTransition(from, to, input) {
        let transition = this.transitions[from];
        if (!transition)
            transition = this.transitions[from] = {};
        transition[input] = to;
    }
}
exports.Dfa = Dfa;
