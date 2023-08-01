type CallbackFn = (elem: any) => boolean
type SomeFn = (arr: any[], cb: CallbackFn) => boolean

export const callBack: CallbackFn = (elem) => {
    if (elem === 42 || elem === "42") {
        return true
    }
    else {
        return false
    }
}

export const some: SomeFn = (arr, cb) => {
    let index: number = 0
    let i: string = arr[index]

    while (i !== undefined && cb(arr[index]) !== true) {
        index++
        i = arr[index]
    }

    if (i !== undefined) {
        return true
    }
    else {
        return false
    }
}