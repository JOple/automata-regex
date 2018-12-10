
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

const REGEX_0_TO_255 = "([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
const REGEX_0_TO_MAXINT = "([1-6][0-5][0-5][0-3][0-5]|[1-9][0-9][0-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9]|[1-9])";
const IPV4_REGEX = REGEX_0_TO_255 + "." + REGEX_0_TO_255 + "." + REGEX_0_TO_255 + "." + REGEX_0_TO_255 + "(:" + REGEX_0_TO_MAXINT + ")?";

let find = finder(IPV4_REGEX)
let str = `Active Connections

Proto  Local Address          Foreign Address        State
TCP    0.0.0.0:135            DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:445            DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:5040           DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:34999          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:38000          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:38068          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:38443          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:49664          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:49666          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:49667          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:49668          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:49669          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:49687          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:49809          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:54900          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:56832          DESKTOP-VOD6LI2:0      LISTENING
TCP    0.0.0.0:65530          DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:5939         DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:9990         DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:9990         DESKTOP-VOD6LI2:62838  ESTABLISHED
TCP    127.0.0.1:12025        DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:12110        DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:12119        DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:12143        DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:12465        DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:12563        DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:12993        DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:12995        DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:27275        DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:58019        DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:62838        DESKTOP-VOD6LI2:9990   ESTABLISHED
TCP    127.0.0.1:62839        DESKTOP-VOD6LI2:0      LISTENING
TCP    127.0.0.1:62839        DESKTOP-VOD6LI2:62841  ESTABLISHED
TCP    127.0.0.1:62841        DESKTOP-VOD6LI2:62839  ESTABLISHED
TCP    192.168.43.238:139     DESKTOP-VOD6LI2:0      LISTENING
TCP    192.168.43.238:63178   5.62.54.204:https      CLOSE_WAIT
TCP    192.168.43.238:63208   52.230.80.159:https    ESTABLISHED
TCP    192.168.43.238:63212   edge-star-shv-02-hkg3:https  ESTABLISHED
TCP    192.168.43.238:63257   edge-star-shv-02-hkg3:https  ESTABLISHED
TCP    192.168.43.238:63521   fra02-003:http         ESTABLISHED
TCP    192.168.43.238:63543   172.217.194.102:http   CLOSE_WAIT
TCP    192.168.43.238:63544   172.217.194.94:https   ESTABLISHED
TCP    192.168.43.238:63561   172.217.194.188:5228   ESTABLISHED
TCP    192.168.43.238:63566   117.18.232.200:https   ESTABLISHED
TCP    192.168.43.238:63624   5.62.53.129:http       ESTABLISHED
TCP    192.168.43.238:63648   a-0001:https           ESTABLISHED
TCP    192.168.43.238:63649   13.107.18.11:https     ESTABLISHED
TCP    192.168.43.238:63650   40.100.18.18:https     ESTABLISHED
TCP    192.168.43.238:63651   13.107.18.11:https     ESTABLISHED
TCP    192.168.43.238:63652   204.79.197.222:https   ESTABLISHED
TCP    192.168.43.238:63654   13.107.246.254:https   ESTABLISHED
TCP    192.168.43.238:63655   a104-101-58-15:https   ESTABLISHED
TCP    192.168.43.238:63657   13.107.3.254:https     ESTABLISHED
TCP    [::]:135               DESKTOP-VOD6LI2:0      LISTENING
TCP    [::]:445               DESKTOP-VOD6LI2:0      LISTENING
TCP    [::]:4000              DESKTOP-VOD6LI2:0      LISTENING
TCP    [::]:38068             DESKTOP-VOD6LI2:0      LISTENING
TCP    [::]:49664             DESKTOP-VOD6LI2:0      LISTENING
TCP    [::]:49666             DESKTOP-VOD6LI2:0      LISTENING
TCP    [::]:49667             DESKTOP-VOD6LI2:0      LISTENING
TCP    [::]:49668             DESKTOP-VOD6LI2:0      LISTENING
TCP    [::]:49669             DESKTOP-VOD6LI2:0      LISTENING
TCP    [::]:49687             DESKTOP-VOD6LI2:0      LISTENING
TCP    [::]:49809             DESKTOP-VOD6LI2:0      LISTENING
TCP    [::1]:4000             DESKTOP-VOD6LI2:63664  TIME_WAIT
TCP    [::1]:4000             DESKTOP-VOD6LI2:63722  FIN_WAIT_2
TCP    [::1]:4000             DESKTOP-VOD6LI2:63723  FIN_WAIT_2
TCP    [::1]:12025            DESKTOP-VOD6LI2:0      LISTENING
TCP    [::1]:12110            DESKTOP-VOD6LI2:0      LISTENING
TCP    [::1]:12119            DESKTOP-VOD6LI2:0      LISTENING
TCP    [::1]:12143            DESKTOP-VOD6LI2:0      LISTENING
TCP    [::1]:12465            DESKTOP-VOD6LI2:0      LISTENING
TCP    [::1]:12563            DESKTOP-VOD6LI2:0      LISTENING
TCP    [::1]:12993            DESKTOP-VOD6LI2:0      LISTENING
TCP    [::1]:12995            DESKTOP-VOD6LI2:0      LISTENING
TCP    [::1]:27275            DESKTOP-VOD6LI2:0      LISTENING
TCP    [::1]:49704            DESKTOP-VOD6LI2:0      LISTENING
TCP    [::1]:63665            DESKTOP-VOD6LI2:4000   TIME_WAIT
TCP    [::1]:63722            DESKTOP-VOD6LI2:4000   CLOSE_WAIT
TCP    [::1]:63723            DESKTOP-VOD6LI2:4000   CLOSE_WAIT
UDP    0.0.0.0:3702           *:*
UDP    0.0.0.0:3702           *:*
UDP    0.0.0.0:5050           *:*
UDP    0.0.0.0:5353           *:*
UDP    0.0.0.0:5355           *:*
UDP    0.0.0.0:34997          *:*
UDP    0.0.0.0:49672          *:*
UDP    0.0.0.0:49693          *:*
UDP    0.0.0.0:54997          *:*
UDP    0.0.0.0:57087          *:*
UDP    0.0.0.0:58021          *:*
UDP    0.0.0.0:60676          *:*
UDP    127.0.0.1:1900         *:*
UDP    127.0.0.1:5353         *:*
UDP    127.0.0.1:49692        *:*
UDP    127.0.0.1:50200        *:*
UDP    127.0.0.1:54899        *:*
UDP    127.0.0.1:56088        *:*
UDP    127.0.0.1:58020        *:*
UDP    127.0.0.1:58086        *:*
UDP    192.168.43.238:137     *:*
UDP    192.168.43.238:138     *:*
UDP    192.168.43.238:1900    *:*
UDP    192.168.43.238:58085   *:*
UDP    [::]:3702              *:*
UDP    [::]:3702              *:*
UDP    [::]:5353              *:*
UDP    [::]:5355              *:*
UDP    [::]:49673             *:*
UDP    [::]:57088             *:*
UDP    [::]:60676             *:*
UDP    [::1]:1900             *:*
UDP    [::1]:58084            *:*
UDP    [fe80::a5d7:eb90:50e3:4670%8]:1900  *:*
UDP    [fe80::a5d7:eb90:50e3:4670%8]:58083  *:*
`
console.log([...find(str)])