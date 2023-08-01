type CallbackFn = (elem: any) => boolean
type FilterFn = (arr: any[], cb: CallbackFn) => any[]

export const callBack: CallbackFn = (elem) => {
    if (typeof(elem) === "string") {
        return true
    }
    else {
        return false
    }
}

export const filter: FilterFn = (arr, cb) => {
    let filteredArray: any[] = []
    let indexFiltered = 0

    let index: number = 0
    let i: string = arr[index]

    while (i !== undefined) {

        if (cb(arr[index]) === true) {
            filteredArray[indexFiltered] = arr[index]

            indexFiltered++
        }
        
        index++
        i = arr[index]
    }

    return filteredArray
}