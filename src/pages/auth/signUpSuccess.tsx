import React from 'react';
import { Result, Button } from 'antd';

import { useHistory } from 'react-router-dom';

 export const  SignUpSuccess:React.FC = (props: any) => {

    const history = useHistory()

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

