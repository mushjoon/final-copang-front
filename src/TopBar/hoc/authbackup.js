import React, { useEffect } from 'react';
import { auth } from '../../_actions/user_actions';
import { useSelector, useDispatch } from "react-redux";

function Auth(ComposedClass, reload, adminRoute = null) {
    function AuthenticationCheck(props) {
        console.log("auth ftn called");
        let user = useSelector(state => state.user);
        console.log("user : " + user);
        const dispatch = useDispatch();

        useEffect(() => {
        
            dispatch(auth()).then(async response => {
                console.log("auth action called");
                console.log(response);
                console.log("response.payload: " + response);
                console.log("response.payload.message: " + response.payload.message)
                console.log("response.payload.data: " + response.payload.message)
                console.log(!response.payload.message === "success");
                if (await !response.payload.message === "success") { //인증 실패하면 login 으로
                    if (reload) {
                        props.history.push('/login')
                    }
                } else if (adminRoute && !response.payload.message) {
                    props.history.push('/')
                } else if (reload === false) {
                    props.history.push('/')
                }


            })

        }, [dispatch, props.history])

        return (
            <ComposedClass {...props} user={user} />
        )
    }
    return AuthenticationCheck
}

export default Auth;
