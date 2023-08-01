type StrLengthFn = (str: string) => number

export const strLength: StrLengthFn = (str) => {
    let init = 0
    let i = str[init]

    while (i !== undefined) {
        init++
        i = str[init]
    }

    return init
}