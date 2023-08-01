type SplitFn = (str: string) => string[]

export const split: SplitFn = (str) => {
    let array: string[] = []

    let index: number = 0
    let i: string = str[index]
    
    while (i !== undefined) {
        array[index] = i

        index++
        i = str[index]
    }

    return array
}