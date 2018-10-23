export type State = string
export type States = State[]

export interface NfaTransition {
    [input: string]: State[]
}
export interface NfaTransitions {
    [from: string]: NfaTransition
}

export interface NfaModel {
    startStates: State[]
    finalStates: State[]
    transitions: NfaTransitions
}

export interface DfaTransition {
    [input: string]: State
}
export interface DfaTransitions {
    [from: string]: DfaTransition
}

export interface DfaModel {
    startState: State
    finalStates: State[]
    transitions: DfaTransitions
}

export const EPS = ""