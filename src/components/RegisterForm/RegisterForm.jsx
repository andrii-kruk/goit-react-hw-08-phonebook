import { Form, Input } from 'antd';
import {
  StyledRegisterForm,
  StyledRegisterItem,
  StyledRegisterButton,
} from './RegisterForm.styled';
import { Link } from 'react-router-dom';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterForm = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <StyledRegisterForm
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <StyledRegisterItem
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </StyledRegisterItem>

      <StyledRegisterItem
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </StyledRegisterItem>

      <StyledRegisterItem
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </StyledRegisterItem>

      <StyledRegisterItem {...tailFormItemLayout}>
        <StyledRegisterButton type="primary" htmlType="submit">
          Register
        </StyledRegisterButton>
        {/* Or <Link to="/login">sign in.</Link> */}
      </StyledRegisterItem>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
