
import React, { FormEvent } from 'react';
import { Form, Input, Select } from 'antd';
import './styles.scss';
import { Link } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form';
import { ISignUp } from "../../../types";
import { Sign_In_but } from '../../UI/buttons/SignIn/Sign_In-but';
import signUpBg from '../../../assets/signUp.png'

const { Option } = Select;

interface ISignUpFormProps extends FormComponentProps {
    handleSubmit(values: ISignUp): void;
    handleError(error: any): void;
}

export default Form.create<ISignUpFormProps>()(function SignUpForm(props: ISignUpFormProps) {
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
        <Form onSubmit={onSubmit} className="sign_up-form" layout="horizontal">
            <h3 className="sign_up-title">Sign Up</h3>
            <Form.Item>
                {props.form.getFieldDecorator('UserName', {
                    rules: [{ required: true, message: 'Please add your Name!' }],
                })(
                    <div className="input-container">
                            <label className="signIn-label">Name
                                <Input
                                    type="UserName"
                                    />
                            </label>
                        </div>
                )}
            </Form.Item>
            <Form.Item>
                {props.form.getFieldDecorator('Login', {
                    rules: [{ required: true, message: 'Please add your Last Name!' }],
                })(
                    <div className="input-container">
                            <label className="signIn-label">Login
                                <Input
                                    type="login"
                                    />
                            </label>
                        </div>
                )}
            </Form.Item>
    
            <Form.Item>
                {props.form.getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please add your Password!' }],
                })(
                    <div className="input-container">
                            <label className="signIn-label">Password
                                <Input.Password
                                    type="password"
                                    />
                            </label>
                        </div>
                )}
            </Form.Item>
            <Form.Item>
                {props.form.getFieldDecorator('confirmPassword', {
                    rules: [{ required: true, message: 'Please confirm your Password!' },
                            { validator: compareToFirstPassword }],
                })(
                    <div className="input-container">
                            <label className="signIn-label">Confirm password
                                <Input.Password
                                    type="password"
                                    />
                            </label>
                        </div>
                )}
            </Form.Item>
            <Form.Item>
                    <Sign_In_but 
                    htmlType="submit"
                    label="Sign In"
                    />
            </Form.Item>
            <span className="sign_up-description">Not a member yet? <Link to="/"  className="link_signUp">Sign in</Link></span>


        </Form>
        <div className="sign_up-bg">
        <img src={signUpBg} alt="Image" className="sign_up-img" />
          </div>
          </>
    )
})
