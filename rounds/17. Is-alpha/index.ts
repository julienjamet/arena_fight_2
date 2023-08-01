type IsAlphaFn = (str: string) => boolean

export const isAlpha: IsAlphaFn = (str) => {
    let index: number = 0
    let i: string = str[index]

    let check = "ok"

    while (i !== undefined) {
        if (i === "a" || i === "b" || i === "c" || i === "d" || i === "e" || i === "f" || i === "g" || i === "h" || i === "i" || i === "j" || i === "k" || i === "l" || i === "m" || i === "n" || i === "o" || i === "p" || i === "q" || i === "r" || i === "s" || i === "t" || i === "u" || i === "v" || i === "w" || i === "x" || i === "y" || i === "z") {
            index++
            i = str[index]
        }
        else if (i === "A" || i === "B" || i === "C" || i === "D" || i === "E" || i === "F" || i === "G" || i === "H" || i === "I" || i === "J" || i === "K" || i === "L" || i === "M" || i === "N" || i === "O" || i === "P" || i === "Q" || i === "R" || i === "S" || i === "T" || i === "U" || i === "V" || i === "W" || i === "X" || i === "Y" || i === "Z") {
            index++
            i = str[index]
        }
        else {
            check = "nok"
            index++
            i = str[index]
        }
    }

    if (check === "ok") {
        return true
    }
    else {
        return false
    }
}