type CallbackFn = (elem: any) => any
type ForEachFn = (arr: any[], cb: CallbackFn) => void

export const printElem: CallbackFn = (elem) => {
    console.log(elem)
}

export const forEach: ForEachFn = (arr, cb) => {
    let index: number = 0
    let i: string = arr[index]

    while (i !== undefined) {
        cb(arr[index])

        index++
        i = arr[index]
    }
}