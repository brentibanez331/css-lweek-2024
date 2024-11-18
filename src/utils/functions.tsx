export const stringToBinary = (str: string) => {
    let binaryString = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const charCode = char.charCodeAt(0);
        binaryString += charCode.toString(2).padStart(8, '0'); // Concatenate binary for each char
    }

    return binaryString;
}

export const stringToDecimal = (str: string) => {

    let decimalString = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        let charCode = char.charCodeAt(0).toString();
        if(charCode.length <= 2){
            charCode = "0" + charCode
        }
        decimalString += charCode; // Concatenate decimal char codes
    }

    return decimalString;
}