type CallbackFn = (elem: any) => any
type MapFn = (arr: any[], cb: CallbackFn) => any[]

export const callBack: CallbackFn = (elem) => {
    if (typeof(elem) === "number") {
        return elem * 3
    }
    else if (typeof(elem) === "string") {
        return `Callback of ${elem} !`
    }
    else {
        return elem
    }
}

export const map: MapFn = (arr, cb) => {
    let array: any[] = []
    let index: number = 0
    let i: string = arr[index]

    while (i !== undefined) {
        array[index] = cb(arr[index])

        index++
        i = arr[index]
    }

    return array
}