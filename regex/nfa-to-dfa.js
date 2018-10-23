"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../types/models");
const nfa_1 = require("../types/nfa");
const set_operations_1 = require("../utils/set-operations");
const dfa_1 = require("../types/dfa");
function sname(states, names) {
    let key = new Array(...new Set(states)).sort().join("|");
    if (!names[key])
        names[key] = "" + Object.keys(names).length;
    return names[key];
}
function inputs(model, states) {
    let out = new Set();
    for (let state of states)
        for (let input in (model.transitions[state] || {}))
            out.add(input);
    return new Array(...out);
}
function nfaToDfa(model) {
    let inModel = new nfa_1.Nfa(model);
    let outModel = new dfa_1.Dfa();
    let finalSet = new Set(inModel.finalStates);
    let nameCache = {};
    let stateSet = new Set(inModel.epsilon(inModel.startStates));
    let stateName = sname(stateSet, nameCache);
    outModel.newStart(stateName);
    let setQueue = [stateSet];
    let notDoneQueue = [stateName];
    let doneQueue = [];
    while (setQueue.length > 0) {
        stateSet = setQueue.pop();
        stateName = notDoneQueue.pop();
        if (set_operations_1.intersection(stateSet, finalSet).size > 0)
            outModel.newFinal(stateName);
        for (let input of inputs(inModel, stateSet)) {
            if (input == models_1.EPS)
                continue;
            let nextStates = inModel.transition(new Array(...stateSet), input, true);
            let nextStateSet = new Set(nextStates);
            let nextStateName = sname(nextStateSet, nameCache);
            if (notDoneQueue.indexOf(nextStateName) == -1 && doneQueue.indexOf(nextStateName) == -1) {
                setQueue.push(nextStateSet);
                notDoneQueue.push(nextStateName);
            }
            outModel.newTransition(stateName, nextStateName, input);
        }
        doneQueue.push(stateName);
    }
    return outModel;
}
exports.nfaToDfa = nfaToDfa;
