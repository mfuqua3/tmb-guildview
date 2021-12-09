import React, {useContext} from "react";
import {ModalContext} from "../providers/ModalProvider";

export function useModal() {
    const state = useContext(ModalContext);
    if(state === null){
        throw new Error("useModal must be used within a Modal provider");
    }
    return {
        showModal: (component: JSX.Element) => state.showModal(component, { isOpen: true }),
        hideModal: () => state.hideModal()
    };
}
