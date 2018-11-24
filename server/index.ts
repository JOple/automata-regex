import * as express from "express"
import * as path from "path"
import { compile } from "../regex/utils"

const app = express()
const PORT = 4000

app.use(express.json())
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, "public")))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.redirect("index.html")
})
app.get("/regex/:regex", (req, res) => {
    let regex = req.param("regex")
    let dfa = compile(regex)
    res.json({
        regex: regex,
        dfa: dfa
    })
})

app.listen(PORT, () => console.log("Server started at " + PORT))