import * as express from "express"
import * as path from "path"
import { compile } from "../regex/utils"
import { finder } from "../regex/regex";

const app = express()
const PORT = 4000

app.use(express.json())
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, "public")))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/draw", (req, res) => {
    res.redirect("draw.html")
})
app.get("/search", (req, res) => {
    res.redirect("search.html")
})
app.post("/regex", (req, res) => {
    let regex = req.body.regex
    let dfa = compile(regex)
    res.json({
        regex: regex,
        dfa: dfa
    })
})
app.post("/find", (req, res) => {
    let regex = req.body.regex
    let text = req.body.text
    let find = finder(regex)
    res.json({
        regex: regex,
        hits: [...find(text)]
    })
})

app.listen(PORT, () => console.log("Server started at " + PORT))