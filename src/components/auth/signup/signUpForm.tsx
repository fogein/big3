/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-pascal-case */
import React, { FormEvent } from 'react';
import { Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form';
import { ISignUp } from "../../../types";
import { Sign_In_but } from '../../UI/buttons/SignIn/Sign_In-but';
let classes = require ('./styles.module.scss');
let signUpBg = require ('../../../assets/images/signUp.png')

let cls:any = classes


interface ISignUpFormProps extends FormComponentProps {
    handleSubmit(values: ISignUp): void;
    handleError(error: any): void;
}

export const FormSignUp =  Form.create<ISignUpFormProps>()(function SignUpForm(props: ISignUpFormProps) {
    function onSubmit(e: FormEvent): void {
        e.preventDefault();
        props.form.validateFields((error, values) => {
            if (error) {
                return props.handleError(error);
            }
            props.handleSubmit(values);
        });
    }

    function compareToFirstPassword (rule: any, value: string, callback: Function)  {
        const { form } = props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    return (
        <>
        <Form onSubmit={onSubmit} className={cls.signUpForm} layout="horizontal">
            <h3 className={cls.signUpTitle}>Sign Up</h3>
            <Form.Item label="Name">
                {props.form.getFieldDecorator('UserName', {
                    rules: [{ required: true, message: 'Please add your Name!' }],
                })(
                    
                                <Input
                                className={cls.input}
                                    type="UserName"
                                    />
                            
                )}
            </Form.Item>
            <Form.Item label="Login">
                {props.form.getFieldDecorator('Login', {
                    rules: [{ required: true, message: 'Please add your Login!' }],
                })(
                                <Input
                                className={cls.input}
                                    type="login"
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
            <Form.Item label="Confirm password">
                {props.form.getFieldDecorator('confirmPassword', {
                    rules: [{ required: true, message: 'Please confirm your Password!' },
                            { validator: compareToFirstPassword }],
                })(
                                <Input.Password
                                className={cls.input}
                                    type="password"
                                    />
                )}
            </Form.Item>
            
            <Checkbox className={cls.checkbox}>I accept the agreement</Checkbox>
                    <Sign_In_but 
                    htmlType="submit"
                    label="Sign Up"
                    />



                <span className={cls.signUpDescription}>Not a member yet? <Link to="/"  className={cls.linkSignIn}>Sign in</Link></span>


        </Form>
                <div className={cls.signUpBg}>
                <img src={signUpBg} alt="Image" className={cls.signUpImg} />
                </div>
          </>
    )
})
