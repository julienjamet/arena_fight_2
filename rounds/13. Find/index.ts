type CallbackFn = (elem: any) => boolean
type FindFn = (arr: any[], cb: CallbackFn) => any

export const callBack: CallbackFn = (elem) => {
    if (elem === 42 || elem === "42") {
        return true
    }
    else {
        return false
    }
}

export const find: FindFn = (arr, cb) => {
    let index: number = 0
    let i: string = arr[index]

    while (i !== undefined && cb(arr[index]) !== true) {
        index++
        i = arr[index]
    }

    return i
}