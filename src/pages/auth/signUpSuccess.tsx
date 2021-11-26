import React, { useCallback } from 'react';
import { Result, Button } from 'antd';
import { push } from 'react-router-redux'
import {  useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

 export const  SignUpSuccess:React.FC = (props: any) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const forwardTo = useCallback(() => dispatch(push('/')),[dispatch]);
    return <Result
                status="success"
                title="Successfully signed up!"
                subTitle="Congratulations! You've just created new account!"
                extra={[
                    <Button
                        type="primary"
                        key="console"
                        onClick={history.push("/")}>
                        Go to SignIn
                    </Button>
                ]}
    />;
}

