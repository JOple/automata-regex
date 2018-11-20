import { NfaModel, States, State, EPS, DfaModel } from "../../types/models";
import { Nfa } from "../../types/nfa";
import { intersection } from "../../utils/set-operations";
import { Dfa } from "../../types/dfa";

export type NameCache = { [key: string]: string }

function sname(states: Iterable<State>, names: NameCache): string {
    let key = new Array(...new Set(states)).sort().join("|")
    if (!names[key])
        names[key] = "" + Object.keys(names).length
    return names[key]
}
function inputs(model: NfaModel, states: Iterable<State>): string[] {
    let out = new Set<string>()
    for (let state of states)
        for (let input in (model.transitions[state] || {}))
            out.add(input)
    return new Array(...out)
}

export function nfaToDfa(model: NfaModel): DfaModel {
    let inModel = new Nfa(model)
    let outModel = new Dfa()

    let finalSet = new Set(inModel.finalStates)
    let nameCache: NameCache = {}

    let stateSet = new Set(inModel.epsilon(inModel.startStates))
    let stateName = sname(stateSet, nameCache)

    outModel.newStart(stateName)

    let setQueue: Set<string>[] = [stateSet]
    let notDoneQueue: string[] = [stateName]
    let doneQueue: string[] = []

    while (setQueue.length > 0) {
        stateSet = setQueue.pop()
        stateName = notDoneQueue.pop()

        if (intersection(stateSet, finalSet).size > 0)
            outModel.newFinal(stateName)

        for (let input of inputs(inModel, stateSet)) {
            if (input == EPS) continue

            let nextStates = inModel.transition(new Array(...stateSet), input, true)
            let nextStateSet = new Set(nextStates)
            let nextStateName = sname(nextStateSet, nameCache)

            if (notDoneQueue.indexOf(nextStateName) == -1 && doneQueue.indexOf(nextStateName) == -1) {
                setQueue.push(nextStateSet)
                notDoneQueue.push(nextStateName)
            }

            outModel.newTransition(stateName, nextStateName, input)
        }

        doneQueue.push(stateName)
    }

    return outModel
}