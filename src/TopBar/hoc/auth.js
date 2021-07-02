import React, { useEffect } from 'react';
import { auth } from '../../_actions/user_actions';
import { useSelector, useDispatch } from "react-redux";

function Auth(Component, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        let user = useSelector(state => state.user);
        const dispatch = useDispatch();
    
        useEffect(() => {
            console.log("effect called!")
            dispatch(auth())
                .then(async response => {
                    console.log("dispatch act's response")
                    if ((!(response.payload.message === "success") & option))  //인증 실패하면 login 으로
                        props.history.push('/login');
                    // else if (adminRoute && !response.payload.message)
                    //     props.history.push('/');
                    else if (option === false)
                        props.history.push('/');
                    
                }
                )
                .catch(async err => {
                    if(await props.history.location.pathname!=="/"){
                        // alert('로그인이 필요합니다.\n로그인 페이지로 이동합니다');
                        props.history.push("/login");
                    }
                });
            console.log("effect 끝");


        }, [props.history])

        return (
            <Component {...props} user={user} />
        )
    }
    return AuthenticationCheck
}

export default Auth;
