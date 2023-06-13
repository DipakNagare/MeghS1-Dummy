import { useContext } from "react"
import { DynamicContext } from "../../context/DynamicContext"
import { GlobalContext } from "../../context/GlobalContext"
import RequestsHandlers from "./RequestsHandlers"
import ValidationHandlers from "../Validations/ValidationHandlers"
import { ValidationContext } from "../Validations/ValidationContext"
import { toast } from "react-toastify"

const FileTypeHandlers = () => {
    
    const { dynamicContextState, setDynamicContextState } = useContext(DynamicContext)
    const { globalContextState, setGlobalContextState } = useContext(GlobalContext)

    const { validationHandlers } = ValidationHandlers()
    const { setValidationState } = useContext(ValidationContext)

    const { requestHadlers } = RequestsHandlers()

    const fileTypeModalUpdateHandler = (key) => {
        const lang = globalContextState.lang
        const link = dynamicContextState[lang][key].link

        setGlobalContextState(prevState => { return { ...prevState, modal: { ...prevState.modal, status: true, type: "file" }, fileModalContent: { ...prevState.fileModalContent, key: key, link: link } } })
    }

    const fileTypeDataUpdateHandler = (e) => {
        // setValidationState(prevState => { return { ...prevState, fileModalContent: { ...prevState.fileModalContent, file: undefined } } })

        const file = e.target.files
        setGlobalContextState(prevState => { return { ...prevState, fileModalContent: { ...prevState.fileModalContent, file: file } } })
    }

    const fileTypeDataSubmitHandler = () => {
        if (validationHandlers.fileTypeValidateAll()) {
            
            const lang = globalContextState.lang
            const key = globalContextState.fileModalContent.key
            const file = globalContextState.fileModalContent.file
            
            if (file.length === 0) {
               
                toast.warn("Please Select The File")
            }
            else {
                requestHadlers.uploadFileHandler(file[0]).then(res => {
                    setDynamicContextState(prevState => { return { ...prevState, [lang]: { ...prevState[lang], [key]: { ...prevState[lang][key], link: res.data.fileData.fileId } } } })
                    fileTypeModalResetHandler()
                    toast.success("File Uploaded Successfully")
                }).catch(err => {
                    toast.error("File Upload Failed")
                })
            }
        }
        else {
            toast.error(" File Validation Error")
        }
    }

    const fileTypeModalResetHandler = () => {
        //they give the value to the veriable undefined when next time any one upload images like file = undefined
        setValidationState(prevState => { return { ...prevState, fileModalContent: { ...prevState.fileModalContent, file: undefined } } })

        setGlobalContextState(prevState => { return { ...prevState, modal: { ...prevState.modal, status: false, type: null }, fileModalContent: { ...prevState.fileModalContent, key: null, link: undefined, file: [] } } })
    }

    const fileTypeHandlers = {
        fileTypeModalUpdateHandler,
        fileTypeDataUpdateHandler,
        fileTypeDataSubmitHandler,
        fileTypeModalResetHandler
    }

    return { fileTypeHandlers }

}

export default FileTypeHandlers