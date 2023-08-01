type ArrLengthFn = (arr: number[]) => number

export const arrLength: ArrLengthFn = (arr) => {
    let index = 0
    let i = arr[index]

    while (i !== undefined) {
        index++
        i = arr[index]
    }

    return index
}