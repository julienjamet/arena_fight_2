type CompareNFn = (strA: string, strB: string, n: number) => number

export const compareN: CompareNFn = (strA, strB, n) => {
    let diffNumber: number = 0

    let lengthA: number = 0
    let lengthB: number = 0

    let indexA: number = 0
    let indexB: number = 0

    let iA: string = strA[indexA]
    let iB: string = strB[indexB]

    /*-----Length of the first string-----*/

    while (iA !== undefined) {
        indexA++
        iA = strA[indexA]
    }

    lengthA = indexA
    indexA = 0
    iA = strA[indexA]

    /*-----Length of the second string-----*/

    while (iB !== undefined) {
        indexB++
        iB = strB[indexB]
    }

    lengthB = indexB
    indexB = 0
    iB = strB[indexB]

    /*-----Update the number of different characters if necessary-----*/

    if (lengthB > lengthA && n > lengthA) {
        if (n > lengthB) {
            n = lengthB
        }

        diffNumber = n - lengthA
    }

    /*-----Loop until 'n' or the end of the first string of characters-----*/

    while (indexA < n && iA !== undefined) {

        if (iA !== iB) {
            diffNumber++
        }

        indexA++
        iA = strA[indexA]

        indexB++
        iB = strB[indexB]
    }

    indexA = 0
    iA = strA[indexA]

    /*-----Return the number of different characters-----*/

    if (n < 0) {
        return 0
    }

    if (n === 0) {
        return 0
    }

    else {
        return diffNumber
    }
}