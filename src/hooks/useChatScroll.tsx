import React, { ComponentState, MutableRefObject, useEffect, useRef } from "react";

const useChatScroll = (dep: ComponentState): MutableRefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>()
    useEffect(() => {
        if(ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight
        }
    }, [dep])

    return ref;
}

export default useChatScroll