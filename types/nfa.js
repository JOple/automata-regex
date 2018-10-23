"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const set_operations_1 = require("../utils/set-operations");
const utils_1 = require("../utils/utils");
class Nfa {
    constructor(model) {
        model = model || { startStates: [], finalStates: [], transitions: {} };
        this.startStates = utils_1.deepCopy(model.startStates || []);
        this.finalStates = utils_1.deepCopy(model.finalStates || []);
        this.transitions = utils_1.deepCopy(model.transitions || {});
    }
    _unique(states) {
        return new Array(...new Set(states)).sort();
    }
    transition(states, input, withEpsilon = true) {
        if (withEpsilon) {
            return this.epsilon(this.transition(states, input, false));
        }
        else {
            if (states instanceof Array)
                states = this._unique(states);
            else if (typeof (states) == "string")
                states = [states];
            else
                states = [];
            let out = new Set();
            for (let state of states) {
                let nextStates = (this.transitions[state] || {})[input] || [];
                for (let nextState of nextStates)
                    out.add(nextState);
            }
            return new Array(...out);
        }
    }
    epsilon(states) {
        let oldSet;
        let newSet = new Set(states);
        do {
            oldSet = newSet;
            newSet = new Set(this.transition(new Array(...oldSet), models_1.EPS, false));
            newSet = set_operations_1.union(newSet, oldSet);
        } while (!set_operations_1.isSame(newSet, oldSet));
        return new Array(...newSet);
    }
    newState() {
        let i = Object.keys(this.transitions).length;
        while (this.transitions["" + i])
            i++;
        this.transitions["" + i] = {};
        return "" + i;
    }
    newStart(state) {
        if (this.startStates.indexOf(state) == -1)
            this.startStates.push(state);
        if (!this.transitions[state])
            this.transitions[state] = {};
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
        let nextStates = transition[input];
        if (!nextStates || !(nextStates instanceof Array))
            nextStates = transition[input] = [];
        if (nextStates.indexOf(to) == -1)
            nextStates.push(to);
    }
}
exports.Nfa = Nfa;
