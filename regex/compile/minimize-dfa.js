"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils/utils");
function isSameGrouping(a, b) {
    for (let state in a) {
        if (a[state] != b[state])
            return false;
    }
    return true;
}
function minimizeDfa(dfa, nullState = "null") {
    let grouping = groupByFinality(dfa);
    //console.log("Finality", grouping)
    grouping = groupByInput(dfa, grouping);
    //console.log("Input", grouping)
    let oldGrouping;
    do {
        oldGrouping = grouping;
        grouping = groupByNextState(dfa, grouping);
        //console.log("NextState", grouping)
    } while (!isSameGrouping(oldGrouping, grouping));
    let transitions = {};
    for (let state in dfa.transitions) {
        let nstate = grouping[state];
        if (!transitions[nstate])
            transitions[nstate] = {};
        let dfaTransition = dfa.transitions[state];
        for (let input in dfaTransition) {
            let nextState = grouping[dfaTransition[input]] || nullState;
            transitions[nstate][input] = nextState;
        }
    }
    return {
        startState: grouping[dfa.startState],
        finalStates: new Array(...new Set(dfa.finalStates.map(s => grouping[s]))),
        transitions: transitions
    };
}
exports.minimizeDfa = minimizeDfa;
function refactorGroup(grouping) {
    let newGrouping = {};
    let oldNew = {};
    for (let state in grouping) {
        let oldGroup = grouping[state];
        let newGroup = oldNew[oldGroup];
        if (!newGroup)
            newGroup = oldNew[oldGroup] = Object.keys(oldNew).length + "";
        newGrouping[state] = newGroup;
    }
    return newGrouping;
}
function groupByFinality(dfa) {
    let finalStates = new Set(dfa.finalStates);
    let grouping = {};
    for (let state of Object.keys(dfa.transitions))
        grouping[state] = finalStates.has(state) ? "0" : "1";
    return grouping;
}
function groupByInput(dfa, grouping, separator = "|") {
    let g = utils_1.deepCopy(grouping);
    for (let state in g) {
        let transitions = dfa.transitions[state]; // Get transition
        let inputs = Object.keys(transitions); // Get initial inputs
        inputs = new Array(...new Set(inputs)) // Filter blank inputs and sort
            .filter(i => transitions[i])
            .sort();
        g[state] = g[state] + separator + inputs.join(separator); // Assign grouping
    }
    return refactorGroup(g);
}
function groupByNextState(dfa, grouping, separator = "|") {
    let g = utils_1.deepCopy(grouping);
    for (let state in g) {
        let transitions = dfa.transitions[state]; // Get transition
        let inputs = Object.keys(transitions); // Get initial inputs
        inputs = new Array(...new Set(inputs)) // Filter blank inputs and sort
            .filter(i => transitions[i])
            .sort();
        let nextStates = inputs.map(i => transitions[i]); // Get next states
        let nextStateGroups = nextStates.map(s => grouping[s]); // Get the current grouping of next states
        g[state] = grouping[state] + separator + nextStateGroups.join(separator); // Assign grouping
        //console.log("State:", state, "Inputs:", inputs, "NextState:", nextStates, "NextGroups", nextStateGroups)
    }
    //console.log("Before Refactor", g)
    return refactorGroup(g);
}
