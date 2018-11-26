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

/* ***********************************
* Global Functions
* ***********************************/
const DEFAULT_REQ: (regex: string) => JQuery.AjaxSettings = regex => {
    return {
        method: "POST",
        url: "http://localhost:4000/regex",
        data: { regex: regex },
    }
}
function draw(regex: string) {
    compileRegex(regex).then(d => {
        console.log(d)
        drawDfa(d.dfa)
    })
}
function compileRegex(regex: string, requestMaker: (regex: string) => JQuery.AjaxSettings = DEFAULT_REQ): Promise<DfaData> {
    return new Promise<DfaData>((resolve, reject) => {
        $.ajax(requestMaker(regex))
            .done(resolve)
            .fail((jqXhr, err) => reject(err))
    })
}
function clearDfa() {
    let cy = cytoscape({ container: document.getElementById('cy') })
    cy.destroy()
}
function drawDfa(dfa: DfaModel) {
    clearDfa()

    let cache = {}
    let elems = []

    let finalStates = new Set<string>(dfa.finalStates)
    function addElem(state: string) {
        if (!cache[state]) {
            let prefix = ""
            if (dfa.startState == state)
                prefix += "s"
            if (finalStates.has(state))
                prefix += "f"

            let stateName = cache[state] = prefix + state
            elems.push({ data: { id: stateName } })

        }
    }

    for (let s1 in dfa.transitions) {
        addElem(s1)
        for (let inp in dfa.transitions[s1]) {
            let s2 = dfa.transitions[s1][inp]
            addElem(s2)

            elems.push({
                data: {
                    id: s1 + "-" + inp + "-" + s2,
                    source: cache[s1],
                    target: cache[s2],
                    label: inp
                }
            })
        }
    }
    let cy = cytoscape({
        container: document.getElementById('cy'),
        elements: elems,
        style: [
            {
                selector: 'node',
                style: {
                    'label': 'data(id)'
                }
            },
            {
                selector: 'edge',
                style: {
                    'label': 'data(label)', // maps to data.label
                    'curve-style': 'bezier',
                    'target-arrow-shape': 'triangle'
                }
            }
        ]
    })
}

// $(() => {
//     let url = new URL(window.location.href)
//     let regex = url.searchParams.get("regex")
//     compileRegex(regex).then(data => {
//         $("#title").text(data.regex)
//         $("#content").text(JSON.stringify(data.dfa, null, 4))
//         console.log(data)
//         return data.dfa
//     }).then(drawDfa)
// })

