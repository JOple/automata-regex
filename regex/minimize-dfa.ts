import { DfaModel, State, States, DfaTransitions } from "../types/models";
import { Dfa } from "../types/dfa";
import { deepCopy, jsonPrint } from "../utils/utils";
import { isSame } from "../utils/set-operations";

function isSameGrouping(a: StateGrouping, b: StateGrouping): boolean {
    for (let state in a) {
        if (a[state] != b[state])
            return false
    }
    return true
}
export function minimizeDfa(dfa: DfaModel, nullState: State = "null"): DfaModel {
    let grouping = groupByFinality(dfa)
    //console.log("Finality", grouping)
    grouping = groupByInput(dfa, grouping)
    //console.log("Input", grouping)
    let oldGrouping
    do {
        oldGrouping = grouping
        grouping = groupByNextState(dfa, grouping)
        //console.log("NextState", grouping)
    } while (!isSameGrouping(oldGrouping, grouping))

    let transitions: DfaTransitions = {}
    for (let state in dfa.transitions) {
        let nstate = grouping[state]

        if (!transitions[nstate])
            transitions[nstate] = {}

        let dfaTransition = dfa.transitions[state]
        for (let input in dfaTransition) {
            let nextState = grouping[dfaTransition[input]] || nullState
            transitions[nstate][input] = nextState
        }
    }

    return {
        startState: grouping[dfa.startState],
        finalStates: new Array(...new Set(dfa.finalStates.map(s => grouping[s]))),
        transitions: transitions
    }
}

interface StateGrouping {
    [state: string]: string
}

function refactorGroup(grouping: StateGrouping): StateGrouping {
    let newGrouping: StateGrouping = {}
    let oldNew: StateGrouping = {}
    for (let state in grouping) {
        let oldGroup = grouping[state]
        let newGroup = oldNew[oldGroup]
        if (!newGroup)
            newGroup = oldNew[oldGroup] = Object.keys(oldNew).length + ""
        newGrouping[state] = newGroup
    }
    return newGrouping
}

function groupByFinality(dfa: DfaModel): StateGrouping {
    let finalStates = new Set(dfa.finalStates)
    let grouping: StateGrouping = {}
    for (let state of Object.keys(dfa.transitions))
        grouping[state] = finalStates.has(state) ? "0" : "1"
    return grouping
}
function groupByInput(dfa: DfaModel, grouping: StateGrouping, separator = "|") {
    let g = deepCopy(grouping)
    for (let state in g) {
        let transitions = dfa.transitions[state] // Get transition
        let inputs = Object.keys(transitions) // Get initial inputs
        inputs = new Array(...new Set(inputs)) // Filter blank inputs and sort
            .filter(i => transitions[i])
            .sort()
        g[state] = g[state] + separator + inputs.join(separator) // Assign grouping
    }
    return refactorGroup(g)
}
function groupByNextState(dfa: DfaModel, grouping: StateGrouping, separator = "|") {
    let g = deepCopy(grouping)
    for (let state in g) {
        let transitions = dfa.transitions[state] // Get transition
        let inputs = Object.keys(transitions) // Get initial inputs
        inputs = new Array(...new Set(inputs)) // Filter blank inputs and sort
            .filter(i => transitions[i])
            .sort()
        let nextStates = inputs.map(i => transitions[i]) // Get next states
        let nextStateGroups = nextStates.map(s => grouping[s]) // Get the current grouping of next states
        g[state] = grouping[state] + separator + nextStateGroups.join(separator) // Assign grouping

        //console.log("State:", state, "Inputs:", inputs, "NextState:", nextStates, "NextGroups", nextStateGroups)
    }
    //console.log("Before Refactor", g)
    return refactorGroup(g)
}