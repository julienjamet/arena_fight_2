type DiffFn = (arrA: number[], arrB: number[]) => number[]

export const diff: DiffFn = (arrA, arrB) => {
    let diffArray: number[] = []
    let indexDiff: number = 0

    let indexA: number = 0
    let indexB: number = 0

    let iA: number = arrA[indexA]
    let iB: number = arrB[indexB]

    while (iA !== undefined) {

        if (iB === undefined) {
            diffArray[indexDiff] = iA
            indexDiff++

            indexA++
            iA = arrA[indexA]

            indexB = -1
        }

        if (iA === iB) {
            indexA++
            iA = arrA[indexA]

            indexB = -1
         }

        indexB++
        iB = arrB[indexB]
    }

    return diffArray
}