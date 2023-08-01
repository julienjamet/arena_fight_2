type PushFn = (arr: any[], item: any) => void

export const push: PushFn = (arr, item) => {
    let index = 0
    let i = arr[index]

    while (i !== undefined) {
        index++
        i = arr[index]
    }

    arr[index] = item

    return arr
}