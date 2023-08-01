type ReverseStringFn = (str: string) => string

export const reverseString: ReverseStringFn = (str) => {

    let reverse: string = ""
    let init: number = 0
    let i: string = str[init]

    while (i !== undefined) {
        init++
        i = str[init]
    }

    init--
    i = str[init]

    while (init >= 0) {
        reverse += i

        init--
        i = str[init]
    }

    return reverse
}