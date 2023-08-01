type ConcatNFn = (strA: string, strB: string, n: number) => string

export const concatN: ConcatNFn = (strA, strB, n) => {
    let index: number = 0
    let i: string = strB[index]

    let strC: string = ""

    while (index < n) {
        if (i !== undefined) {
            strC += i
        }

        index++
        i = strB[index]
    }

    if (n < 0) {
        return strA
    }
    else {
        return strA + strC
    }
}