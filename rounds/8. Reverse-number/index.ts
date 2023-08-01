type ReverseNumbersFn = (numbers: number[]) => number[]

export const reverseNumbers: ReverseNumbersFn = (numbers) => {
    let reverse: number[] = []
    let indexReverse: number = 0

    let index: number = 0
    let i: number = numbers[index]
    
    while (i !== undefined) {
        index++
        i = numbers[index]
    }

    index--
    i = numbers[index]

    while (index !== -1) {
        reverse[indexReverse] = i
        indexReverse++

        index--
        i = numbers[index]
    }

    return reverse
}