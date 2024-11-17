export const charToBinary = (char: string) => {

    const charCode = char.charCodeAt(0);
    return charCode.toString(2).padStart(8, '0');

    // let binaryString = ""
    // for (let i = 0; i < char.length; i++) {
    //     let charCode = char.charCodeAt(i)
    //     let binaryCharCode = charCode.toString(2)
    //     binaryString += binaryCharCode.padStart(8, '0') + " "
    // }

    // console.log("ANSWER IS: ", binaryString.trim())

    // return binaryString.trim();
}

export const charToDecimal = (char: string) => {
    if(char.length !== 1){
        throw new Error("Input must be a single character")
    }

    return char.charCodeAt(0)


}