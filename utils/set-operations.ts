export function isSuperset(a: Iterable<any>, b: Iterable<any>): boolean {
    let setA = new Set(a)
    for (let val of b)
        if (!setA.has(val))
            return false
    return true
}
export function isSame(a: Iterable<any>, b: Iterable<any>): boolean {
    let setA = new Set(a), setB = new Set(b)
    if (setA.size != setB.size) return false
    let intersect = intersection(setA, setB)
    return intersect.size == setA.size
}

export function union<T>(...a: Iterable<T>[]): Set<T> {
    let _union = new Set<T>()
    for (let iter of a) {
        for (let val of iter)
            _union.add(val)
    }
    return _union
}
export function intersection<T>(...a: Iterable<T>[]): Set<T> {
    if (a.length == 0) return new Set()

    let _intersection = new Set<T>(a[0])
    for (let val of _intersection) {
        for (let i = 1; i < a.length; i++) {
            let b = new Set(a[i])
            if (!b.has(val))
                _intersection.delete(val)
        }
    }
    return _intersection
}

export function difference<T>(a: Iterable<T>, b: Iterable<T>): Set<T> {
    let _difference = new Set<T>(a)
    for (let val of b)
        if (_difference.has(val))
            _difference.delete(val)
    return _difference
}