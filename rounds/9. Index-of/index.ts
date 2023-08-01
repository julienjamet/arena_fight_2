type IndexOfFn = (arr: any[], elem: any) => number

export const indexOf: IndexOfFn = (arr, elem) => {

    let index: number = 0
    let i: number = arr[index]

    while (i !== elem && i !== undefined) {
        index++
        i = arr[index]
    }

    if (i === undefined) {
        return -1
    }
    else {
        return index
    }
}