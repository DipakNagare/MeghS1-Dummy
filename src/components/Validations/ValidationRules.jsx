const isRequiredString = (field) => {
    return field !== null && field !== undefined && field.toString().trim() !== "";
}

const isMaxLenghtString = (field) => {
    // console.log("---------",typeof field.toString(),"----------",field.toString())
    return  field.toString().trim().length < 256;
}

const isValidEmail = (field) =>{
    // console.log("type of field",typeof field,"=======",field)
    const Regex = /^mailto: [^\s@]+@[^\s@]+\.[^\s@]+$/;
    return field.match(Regex);
}

const isValidNumber = (field) => {
    const NumberRegex =/^tel:\+\d+$/;
    return field.match(NumberRegex)
}

const isValidImageFile = (field)  => {
    if (typeof field !== 'string') {
        return false;
      }
    const FileRegex = /^([a-zA-Z0-9\s_\\.\-:])+(.png|.jpe?g|.gif)$/i;
    return field.match(FileRegex)
}

const ValidationRules = {
    isRequiredString,
    isMaxLenghtString,
    isValidEmail,
    isValidNumber,
    isValidImageFile
}

export default ValidationRules