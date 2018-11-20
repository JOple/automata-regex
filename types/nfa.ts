import { NfaModel, NfaTransitions, States, State, EPS } from "./models";
import { isSame, union } from "../utils/set-operations";
import { deepCopy } from "../utils/utils";

export class Nfa implements NfaModel {

    public startStates: string[];
    public finalStates: string[];
    public transitions: NfaTransitions;

    constructor(model?: NfaModel) {
        model = model || { startStates: [], finalStates: [], transitions: {} }
        this.startStates = deepCopy(model.startStates || [])
        this.finalStates = deepCopy(model.finalStates || [])
        this.transitions = deepCopy(model.transitions || {})
    }

    private _unique(states: States): States {
        return new Array(...new Set(states)).sort()
    }

    public isStartState(state: State): boolean {
        return new Set(this.startStates).has(state)
    }
    public isFinalState(state: State): boolean {
        return new Set(this.finalStates).has(state)
    }
    public transition(states: State | States, input: string, withEpsilon = true): States {
        if (withEpsilon) {
            return this.epsilon(this.transition(states, input, false))
        } else {
            if (states instanceof Array)
                states = this._unique(states)
            else if (typeof (states) == "string")
                states = [states]
            else
                states = []

            let out = new Set<string>()

            for (let state of states) {
                let nextStates = (this.transitions[state] || {})[input] || []
                for (let nextState of nextStates)
                    out.add(nextState)
            }

            return new Array(...out)
        }
    }

    public epsilon(states: States): States {
        let oldSet: Set<string>
        let newSet = new Set(states)
        do {
            oldSet = newSet
            newSet = new Set(this.transition(new Array(...oldSet), EPS, false))
            newSet = union(newSet, oldSet)
        } while (!isSame(newSet, oldSet))
        return new Array(...newSet)
    }

    public newState(): State {
        let i = Object.keys(this.transitions).length
        while (this.transitions["" + i])
            i++
        this.transitions["" + i] = {}
        return "" + i
    }
    public newStart(state: State) {
        if (this.startStates.indexOf(state) == -1)
            this.startStates.push(state)
        if (!this.transitions[state]) this.transitions[state] = {}
    }
    public newFinal(state: State) {
        if (this.finalStates.indexOf(state) == -1)
            this.finalStates.push(state)
        if (!this.transitions[state]) this.transitions[state] = {}
    }
    public newTransition(from: State, to: State, input: string) {
        let transition = this.transitions[from]
        if (!transition)
            transition = this.transitions[from] = {}

        let nextStates = transition[input]
        if (!nextStates || !(nextStates instanceof Array))
            nextStates = transition[input] = []

        if (nextStates.indexOf(to) == -1)
            nextStates.push(to)
    }
}