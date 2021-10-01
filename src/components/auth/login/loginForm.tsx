/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-pascal-case */
import React, { FormEvent } from 'react';
import { Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/es/form';

import './styles.scss';
import { Link } from 'react-router-dom';
import { ILogin } from '../../../types';
import signInBg from '../../../assets/SignInBg.png'
import { Sign_In_but } from '../../UI/buttons/SignIn/Sign_In-but';



interface ILoginFormProps extends FormComponentProps {
    handleSubmit(values: ILogin): void,
    handleError(error: any): void,
}

function LoginForm(props: ILoginFormProps) {
    function onSubmit(e: FormEvent): void {
        e.preventDefault();
        props.form.validateFields((error, values) => {
            if (error) {
                return props.handleError(error);
            }
            props.handleSubmit(values);
        });
    }

    return (
        <>
                <Form onSubmit={onSubmit} className="sign_in-form">
                <h3 className="sign_in-title">Sign In</h3>
                <Form.Item label="Login">
                    {props.form.getFieldDecorator('Login', {
                        rules: [{ required: true, message: 'Please add your Login!' }],
                    })(
                                <Input
                                type="Login"  
                                />
                    )}
                </Form.Item>
                <Form.Item label="Password">
                    {props.form.getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please add your Password!' }],
                    })(
                                <Input.Password
                                    type="password"
                                    />
                        
                        
                    )}
                </Form.Item>
                
                    <Sign_In_but 
                    htmlType="submit"
                    label="Sign In"
                    />
                
                <span className="sign_in-description">Not a member yet? <Link to="/SignUp"  className="link_signUp">Sign up</Link></span>
            </Form>

            <div className="sign_in-bg">
          <img src={signInBg} alt="Image" className="sign_in-img" />
            </div>

</>
    )
}

export default Form.create<ILoginFormProps>({ name: 'LoginForm' })(LoginForm);
