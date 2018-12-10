const DEFAULT_REQ_FIND: (regex: string, text: string) => JQuery.AjaxSettings = (regex, text) => {
    return {
        method: "POST",
        url: "http://localhost:4000/find",
        data: { regex: regex, text: text }
    }
}
function regexFind(regex: string, text: string, requestMaker: (regex: string, text: string) => JQuery.AjaxSettings = DEFAULT_REQ_FIND) {
    return new Promise<PortionData>((resolve, reject) => {
        $.ajax(requestMaker(regex, text))
            .done(resolve)
            .fail((jqXhr, err) => reject(err))
    })
}

function findLine(regex: string, text: string) {
    return regexFind(regex, text).then(d => {
        var parts: string[] = []
        var i = 0
        console.log(d.hits);
        for (var hit of d.hits) {
            parts.push(text.substring(i, hit.start))
            parts.push("<span class='hit'>" + text.substring(hit.start, hit.end) + "</span>")
            i = hit.end
        }
        parts.push(text.substring(i, text.length))
        parts = parts.filter(str => str != "")
        return parts.join("")
    })
}

function findAll(regex: string) {
    let plines = []
    let lines = []
    // $("#dest")
    //     .children("")
    //     .each((i, e) => { lines.push($(e).text()) })
    lines = $("#src").val().toString().split("\n")
    lines.forEach((line, i) => {
        findLine(regex, line)
            .then(pstr => plines[i] = pstr)
            .then(() => {
                if (plines.length == lines.length) {
                    var joined = plines
                        .map(str => str == "" ? "<br>" : str)
                        .map(str => "<div>" + str + "</div>")
                        .join("\n")
                    $("#dest").html(joined)
                }
            })
    })
}

const REGEX_0_TO_255 = "([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
const cases: string[] = [
    "[1-9]",
    "[1-9][0-9]",
    "[1-9][0-9][0-9]",
    "[1-9][0-9][0-9][0-9]",
    "[1-5][0-9][0-9][0-9][0-9]",
    "6553[0-5]",
    "655[0-2][0-9]",
    "65[0-4][0-9][0-9][0-9]",
    "6[0-4][0-9][0-9][0-9]",
    "6[0-5][0-5][0-3][0-5]",
]
const REGEX_0_TO_MAXINT = "(" + cases.join("|") + ")";
const IPV4_REGEX = REGEX_0_TO_255 + "." + REGEX_0_TO_255 + "." + REGEX_0_TO_255 + "." + REGEX_0_TO_255 + "(:" + REGEX_0_TO_MAXINT + ")?";

function findIPv4() {
    findAll(IPV4_REGEX);
}