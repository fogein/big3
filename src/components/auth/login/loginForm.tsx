
import React, { FormEvent } from 'react';
import { Form, Input } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { Link } from 'react-router-dom';
import { ILogin } from '../../../api/dto/auth'; 
import { SignInbut } from '../../../UI/buttons/signIn/signInBut';
import signInBg from '../../../assets/images/SignInBg.png';
import cls from './styles.module.scss'



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
                
                    <SignInbut 
                    htmlType="submit"
                    label="Sign In"
                    />
                
                <span className={cls.signInDescription}>Not a member yet? <Link to={"/signup"}  className={cls.linkSignUp}>Sign up</Link></span>
            </Form>

            <div className={cls.signInBg}>
          <img src={signInBg} alt="SignInimg" className={cls.signInImg} />
            </div>

</>
    )
}

export const FormLogin = Form.create<ILoginFormProps>({ name: 'LoginForm' })(LoginForm);
