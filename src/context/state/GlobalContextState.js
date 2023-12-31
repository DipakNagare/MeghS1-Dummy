import { useState } from "react"

const GlobalContextState = () => {

    const defaultGlobalContextState = {
        lang: "eng",
        server: {
            uploads: "http://samnayakawadi.hyderabad.cdac.in:8093"
        },
        modal: {
            status: false,
            type: undefined, // text or file or link
        },
        textModalContent: {
            key: undefined,
            value: undefined
        },
        fileModalContent: {
            key: undefined,
            link: undefined,
            file: []
        },
        linkModalContent: {
            key: undefined,
            title: undefined,
            link: undefined
        },
        autoClose: 4000,
        editMode: false
    }

    const [globalContextState, setGlobalContextState] = useState(defaultGlobalContextState)

    return { defaultGlobalContextState, globalContextState, setGlobalContextState }

}

export default GlobalContextState