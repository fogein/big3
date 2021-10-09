import React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import LoginForm from '../../../components/auth/login/loginForm';
import { IRootState } from '../../../core/redux/reducers/state';
import { Dispatch } from 'redux';
import { ILogin } from '../../../types';
import { AuthActions } from '../../../core/redux/actions';


let classes = require('./styles.module.scss');
let cls:any = classes

type ILoginContainerProps = ReturnType<typeof mapDispatchToProps>;

function LoginContainer(props: ILoginContainerProps) {
    return (
        <div className={cls.loginFormContainer}>
            <LoginForm handleSubmit={props.signIn} handleError={console.error} />
        </div>
    )
}

const mapStateToProps = (state: IRootState) => ({

});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    signIn: (payload: ILogin) => dispatch(AuthActions.signIn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
