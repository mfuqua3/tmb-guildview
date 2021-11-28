import {useContext, useState} from "react";
import {MenuContext} from "../providers/MenuProvider";

export interface MenuProps {
    open(anchorEl: Element): void;
    close(): void;
    isOpen: boolean;
}

export function useMenu(): MenuProps {
    const state = useContext(MenuContext);
    if (state === null) {
        throw new Error("useMenu must be used within a Menu provider");
    }
    const [id, setId] = useState<string | null>(null);
    function open(anchorEl: Element): void {
        if(state === null){
            return;
        }
        const menuId = state.open(anchorEl);
        setId(menuId);
    }
    function close(): void{
        setId(null);
    }
    return {
        open,
        close,
        isOpen: id === state.menuId
    }
}
