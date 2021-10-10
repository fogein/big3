/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-pascal-case */
import React, { FormEvent } from 'react';
import { Form, Input } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { Link } from 'react-router-dom';
import { ILogin } from '../../../types';
import { Sign_In_but } from '../../UI/buttons/SignIn/Sign_In-but';

let signInBg = require ('../../../assets/images/SignInBg.png')
let classes = require('./styles.module.scss');
let cls:any = classes


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
                <Form onSubmit={onSubmit} className={cls.signInForm}>
                <h3 className={cls.signInTitle}>Sign In</h3>
                <Form.Item className={cls.control} label="Login">
                    {props.form.getFieldDecorator('Login', {
                        rules: [{ required: true, message: 'Please add your Login!' }],
                    })(
                                <Input
                                className={cls.input}
                                type="Login"  
                                />
                    )}
                </Form.Item>
                <Form.Item label="Password">
                    {props.form.getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please add your Password!' }],
                    })(
                                <Input.Password
                                className={cls.input}
                                type="password"
                                />
                        
                        
                    )}
                </Form.Item>
                
                    <Sign_In_but 
                    htmlType="submit"
                    label="Sign In"
                    />
                
                <span className={cls.signInDescription}>Not a member yet? <Link to="/SignUp"  className={cls.linkSignUp}>Sign up</Link></span>
            </Form>

            <div className={cls.signInBg}>
          <img src={signInBg} alt="Image" className={cls.signInImg} />
            </div>

</>
    )
}

export const FormLogin = Form.create<ILoginFormProps>({ name: 'LoginForm' })(LoginForm);
