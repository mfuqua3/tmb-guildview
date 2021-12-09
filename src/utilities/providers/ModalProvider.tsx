import React, {ReactNode, useState} from "react";
import {Backdrop, Box, Fade, Modal} from "@mui/material";

export interface ModalProps {
    isOpen: boolean;
    size?: "small" | "large" | "fullscreen" | "inherit"
}

export interface ModalState {
    component: JSX.Element | null;
    props: ModalProps;

    showModal(component: JSX.Element, props: ModalProps): void;

    hideModal(): void;
}

export const ModalContext = React.createContext<ModalState | null>(null);

export interface ModalProviderProps {
    children: ReactNode;
}

function ModalProvider({children}: ModalProviderProps) {
    const initialState: ModalState = {
        component: null,
        props: {isOpen: false, size: "inherit"},
        showModal,
        hideModal
    };
    const [modalState, setModalState] = useState<ModalState>(initialState);

    function showModal(component: JSX.Element, modalProps: ModalProps): void {
        setModalState({...modalState, component: component, props: modalProps});
    }

    function hideModal(): void {
        setModalState(initialState);
    }

    const modalSize = (size: "small" | "large" | "fullscreen" | "inherit" | undefined) => {
        switch (size) {
            case "small":
                return "25%";
            case "large":
                return "75%";
            case "fullscreen":
                return "100%";
            default:
                return "inherit";
        }
    };

    return (
        <ModalContext.Provider value={modalState}>
            {modalState.component &&
            <Modal
                // eslint-disable-next-line react/prop-types
                open={!!modalState.props && modalState.props.isOpen}
                onClose={hideModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                disablePortal
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={!!modalState.props && modalState.props.isOpen}>
                        <Box
                            sx={
                                {
                                    position: 'absolute' as 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: modalSize(modalState.props?.size),
                                    backgroundColor: "background.paper",
                                    borderRadius: "4px",
                                    minWidth: "35%",
                                    p: [2, 4, 3],
                                }}>
                            {modalState.component}
                        </Box>
                </Fade>
            </Modal>}
            {children}
        </ModalContext.Provider>
    )
}

export default React.memo(ModalProvider);
