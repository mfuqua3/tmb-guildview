import React from "react";
import {useLoading} from "../providers/LoadingProvider";

export type InvokeHandler = <T>(delegate:()=> Promise<T> | T)=> Promise<T>;

export function useInvoke(): InvokeHandler {
    const {setLoading} = useLoading();
    async function invoke<T>(delegate: ()=> Promise<T> | T): Promise<T> {
        setLoading(true);
        try {
            return await delegate();
        }
        finally {
            setLoading(false);
        }
    }
    return invoke;
}
