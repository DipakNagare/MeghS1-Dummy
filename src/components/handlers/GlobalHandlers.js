import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

const GlobalHandlers = () => {

    const { setGlobalContextState } = useContext(GlobalContext)
    
    const updateGlobalLanguageHandler = (e) => {
        console.log("lang", e.target.value)
        setGlobalContextState(prevState => { return { ...prevState, lang: e.target.value } })
    }
     
    const editModeChangeHandler = () => {
        setGlobalContextState(prevState => { return { ...prevState, editMode: !prevState.editMode } })
    }
    
    const globalHandlers = {
        updateGlobalLanguageHandler,
        editModeChangeHandler
    }
    return { globalHandlers }

}

export default GlobalHandlers