import { State, DfaTransitions, DfaModel } from "./models";
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

    public isStartState(state: State): boolean {
        return this.startState == state
    }
    public isFinalState(state: State): boolean {
        return new Set(this.finalStates).has(state)
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