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
    $("#dest")
        .children("")
        .each((i, e) => { lines.push($(e).text()) })
    lines.forEach((str, i) => {
        findLine(regex, str)
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