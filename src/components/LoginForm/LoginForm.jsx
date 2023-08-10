import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { StyledButton, StyledForm } from './LoginForm.styled';
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <StyledForm
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <StyledButton
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Log in
        </StyledButton>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </StyledForm>
  );
};
export default LoginForm;
