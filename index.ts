
import { compile } from "./regex/utils";
import { finder, finderMax } from "./regex/regex";

function print(a) {
    console.log(JSON.stringify(a, null, 4))
}
function cp(regex: string) {
    console.log("___________________________________")
    console.log(regex)
    print(compile(regex))
    console.log("___________________________________")
}

/*
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

let find = finder("[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]")
let str = `Deadline: Dropping of courses with 100% refund for Term 1	
08/09/2018 Sat
08:00AM - 03:00PM
View		Deadline: Dropping of courses with 100% refund for Term 1	
08/09/20128 Sat
08:00AM - 03:00PM
View		Thesis/Dissertation Defense - Proposal for Term 1	
10/Sep/2018 Mon - 09/11/2018 and 10/11/2018 Fri (Mon-Fri)
08:00AM - 06:00PM
View		Thesis/Dissertation Defense - Final for Term 1	
2018/09/10 Mon - 26 Oct 2018 Fri (Mon-Fri)
08:00AM - 06:00PM
View		Start of Classes for Term 1	
10 Sep 2018 Mon
08:00AM - 09:00PM
View		Thesis/Dissertation (T/D) Writing - All for Term 1	



26/12/2018 
`
console.log([...find(str)])