/* ***********************************
* Section for Data Types
* ***********************************/
type State = string
interface DfaTransition {
    [input: string]: State
}
interface DfaTransitions {
    [from: string]: DfaTransition
}
interface DfaModel {
    startState: State
    finalStates: State[]
    transitions: DfaTransitions
}
interface DfaData {
    regex: string
    dfa: DfaModel
}

interface StringPortion {
    text: string
    start: number
    end: number
}
interface PortionData {
    regex: string,
    hits: StringPortion[]
}
