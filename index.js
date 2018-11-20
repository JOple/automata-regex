"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./regex/utils");
const regex_1 = require("./regex/regex");
function print(a) {
    console.log(JSON.stringify(a, null, 4));
}
function cp(regex) {
    console.log("___________________________________");
    console.log(regex);
    print(utils_1.compile(regex));
    console.log("___________________________________");
}
/**
 * Uncomment the following statements to print the transition tables
 */
// cp("(a|b)*abb")
// cp("(M|m)(A|a)(Y|y)(N|n)(A|a)(R|r)(D|d)")
// cp("(0|1)*1(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)(0|1)")
// cp("[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?[a-z]?")
// cp("(a|b)*")
// cp("0*10*")
// cp("(b*ab*ab*(a|b)*)|(a*ba*ba*)")
// cp("")
// cp("(((c|d)*(cd|dc))|c|d)?")
// cp("[a-z]([a-z]|[A-Z]|[0-9])*")
// cp("\n")
let find = regex_1.finder("\\(|\t");
console.log([...find("aa\taa(bb\nbbabb")]);
