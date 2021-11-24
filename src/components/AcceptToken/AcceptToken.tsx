import React, {useEffect} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../../utilities/hooks/useAuth";

function AcceptToken() {
    const { token } = useParams();
    const { authenticate } = useAuth();
    const navigate = useNavigate();
    useEffect(()=> {
        authenticate(token as string);
        navigate("/");
    },[]);
    return (
        <>
            <span>
                ...loading
            </span>
        </>
    );
}

export default AcceptToken;
