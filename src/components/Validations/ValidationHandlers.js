import { useContext } from "react"
import { ValidationContext } from "./ValidationContext"
import ValidationRules from "./ValidationRules"
import { GlobalContext } from "../../context/GlobalContext"

const ValidationHandlers = () => {

    const { setValidationState } = useContext(ValidationContext)
    const { globalContextState } = useContext(GlobalContext)

    // text type validation handlers validation code

    const textTypeValidatorHandler = (field) => {
        if (!ValidationRules.isRequiredString(field)) {
            setValidationState(prevState => { return { ...prevState, textModalContent: { ...prevState.textModalContent, value: "This Field Cannot Be Empty" } } })
            return false
        }
        else if (!ValidationRules.isMaxLenghtString(field)) {
            setValidationState(prevState => { return { ...prevState, textModalContent: { ...prevState.textModalContent, value: "maximum lenght reached" } } })
            return false
        }
        else {
            setValidationState(prevState => { return { ...prevState, textModalContent: { ...prevState.textModalContent, value: undefined } } })
            return true
        }
    }

    const textTypeValidateAll = () => {
        return textTypeValidatorHandler(globalContextState.textModalContent.value)
    }

    // Link type validation handler valiaton code

    const linkTypeValidatorHandler = (e) => {
        const field = e.target.value;

        if (!ValidationRules.isRequiredString(field)) {
            setValidationState(prevState => { return { ...prevState, linkModalContent: { ...prevState.linkModalContent, [e.target.name]: "This Field Cannot Be Empty" } } })
            return false
        }

        else if (!ValidationRules.isMaxLenghtString(field)) {
            setValidationState(prevState => { return { ...prevState, linkModalContent: { ...prevState.linkModalContent, [e.target.name]: "maximum lenght reached" } } })
            return false
        }
        //  e.target.name === "link" &&   ----> khali if else madhe
        else if (globalContextState.linkModalContent.key === "enquiry_us_id" && e.target.name === "link" && !ValidationRules.isValidEmail(field)) {
            setValidationState(prevState => { return { ...prevState, linkModalContent: { ...prevState.linkModalContent, link: "Not valid Email-Id" } } })
            return false
        }
        else if (globalContextState.linkModalContent.key === "call_us_phone" && e.target.name === "link" && !ValidationRules.isValidNumber(field)) {
            setValidationState(prevState => { return { ...prevState, linkModalContent: { ...prevState.linkModalContent, link: "Not valid Phone Number Please enter valid phone Number!" } } })
            return false
        }
        else {
            setValidationState(prevState => { return { ...prevState, linkModalContent: { ...prevState.linkModalContent, [e.target.name]: undefined } } })
            return true
        }
    }

    const linkTypeValidateAll = () => {
        return (linkTypeValidatorHandler({ target: { value: globalContextState.linkModalContent.link, name: "link" } }) && linkTypeValidatorHandler({ target: { value: globalContextState.linkModalContent.title, name: "title" } }));
    }

    // for file validation code

    const fileTypeValidatorHandler = (field) => {
        console.log("TypeofFieldchivalue",typeof field,"feieldchnav",field)
        // globalContextState.fileModalContent.key === "call_us_phone" &&
        if (!ValidationRules.isValidImageFile(field)) {
            setValidationState(prevState => { return { ...prevState, fileModalContent: { ...prevState.fileModalContent, file: "Only Images are allowed (JPG/PNG/JPEG)" } } })
            return false
        }
        else {
            setValidationState(prevState => { return { ...prevState, fileModalContent: { ...prevState.fileModalContent, file: undefined } } })
            return true
        }
    }
    
    const fileTypeValidateAll = () => {
        return fileTypeValidatorHandler(globalContextState.fileModalContent.file[0].name)
    }



    const validationHandlers = {
        textTypeValidatorHandler,
        textTypeValidateAll,
        linkTypeValidatorHandler,
        linkTypeValidateAll,
        fileTypeValidatorHandler,
        fileTypeValidateAll
    }

    return { validationHandlers }

}

export default ValidationHandlers