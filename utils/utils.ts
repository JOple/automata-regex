export function deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj))
}
export function jsonPrint(obj: any, space = 4) {
    console.log(JSON.stringify(obj, null, space))
}