export const charToBinary = (char: string) => {

    const charCode = char.charCodeAt(0);
    return charCode.toString(2).padStart(8, '0');
}

export const charToDecimal = (char: string) => {

    return char.charCodeAt(0).toString()
}