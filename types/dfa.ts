import { NfaModel, NfaTransitions, States, State, EPS, DfaTransitions, DfaModel } from "./models";
import { isSame, union } from "../utils/set-operations";
import { deepCopy } from "../utils/utils";

export class Dfa implements DfaModel {

    public startState: string;
    public finalStates: string[];
    public transitions: DfaTransitions;

    constructor(model?: DfaModel) {
        model = model || { startState: "", finalStates: [], transitions: {} }
        this.startState = deepCopy(model.startState || "")
        this.finalStates = deepCopy(model.finalStates || [])
        this.transitions = deepCopy(model.transitions || {})
    }

    private _unique(states: States): States {
        return new Array(...new Set(states)).sort()
    }

    public transition(state: State, input: string): State {
        return this.transitions[state][input]
    }

    public newState(): State {
        let i = Object.keys(this.transitions).length
        while (this.transitions["" + i])
            i++
        this.transitions["" + i] = {}
        return "" + i
    }
    public newStart(state: State) {
        this.startState = state
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

        transition[input] = to
    }
}