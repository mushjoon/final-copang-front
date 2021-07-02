import React, { useEffect } from 'react';
import { auth } from '../../_actions/user_actions';
import { useSelector, useDispatch } from "react-redux";

function Auth(ComposedClass, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(async response => {
                if (await (!(response.payload.message === "success") & option))  //인증 실패하면 login 으로
                    props.history.push('/login');
                else if (adminRoute && !response.payload.message)
                    props.history.push('/');
                else if (option === false)
                    props.history.push('/');
            })

        }, [dispatch, props.history, props.location])

        return (
            <ComposedClass {...props} user={user} />
        )
    }
    return AuthenticationCheck
}

export default Auth;
