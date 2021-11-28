import React, {ReactNode, useState} from "react";

export interface MenuProviderProps {
    children: ReactNode;
}
export interface MenuProviderState {
    open(anchorElement: Element): string;
    menuId: string;
    anchorEl: Element | ((element: Element) => Element) | null | undefined;
}
export const MenuContext = React.createContext<MenuProviderState | null>(null);
interface MenuObj {
    anchorEl: Element;
    id: string;
}
function MenuProvider({children}: MenuProviderProps) {
    const [menu, setMenu] = useState<MenuObj | null>(null);
    function open(anchorElement: Element): string {
        if(menu?.anchorEl === anchorElement){
            return menu.id;
        }
        const id = "id" + Math.random().toString(16).slice(2);
        setMenu({
            id,
            anchorEl: anchorElement
        });
        return id;
    }
    const state:MenuProviderState = {
        open,
        anchorEl: menu?.anchorEl,
        menuId: menu?.id ?? ""
    };
    return (
        <MenuContext.Provider value={state}>
            {children}
        </MenuContext.Provider>
    )
}

export default React.memo(MenuProvider);
