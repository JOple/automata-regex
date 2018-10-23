"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSuperset(a, b) {
    let setA = new Set(a);
    for (let val of b)
        if (!setA.has(val))
            return false;
    return true;
}
exports.isSuperset = isSuperset;
function isSame(a, b) {
    let setA = new Set(a), setB = new Set(b);
    if (setA.size != setB.size)
        return false;
    let intersect = intersection(setA, setB);
    return intersect.size == setA.size;
}
exports.isSame = isSame;
function union(...a) {
    let _union = new Set();
    for (let iter of a) {
        for (let val of iter)
            _union.add(val);
    }
    return _union;
}
exports.union = union;
function intersection(...a) {
    if (a.length == 0)
        return new Set();
    let _intersection = new Set(a[0]);
    for (let val of _intersection) {
        for (let i = 1; i < a.length; i++) {
            let b = new Set(a[i]);
            if (!b.has(val))
                _intersection.delete(val);
        }
    }
    return _intersection;
}
exports.intersection = intersection;
function difference(a, b) {
    let _difference = new Set(a);
    for (let val of b)
        if (_difference.has(val))
            _difference.delete(val);
    return _difference;
}
exports.difference = difference;
