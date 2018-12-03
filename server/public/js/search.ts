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

function find(regex: string, text: string) {
    return regexFind(regex, text).then(d => {
        console.log(d)
        var parts: string[] = []
        var i = 0
        for (var hit of d.hits) {
            parts.push(text.substring(i, hit.start))
            parts.push("<span class='hit'>" + text.substring(hit.start, hit.end) + "</span>")
            i = hit.end
        }
        parts = parts.filter(str => str != "")
        console.log(parts)
        return parts.join("").replace("\n", "<br>")
    })
}

function findRegex(regex: string) {
    find(regex, $("#src").val().toString()).then(str => $("#dest").html(str))
}