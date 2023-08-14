import { Form, Input } from 'antd';
import {
  StyledRegisterForm,
  StyledRegisterItem,
  StyledRegisterButton,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/reducers/authReducer';

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
  const dispatch = useDispatch();

  const onFinish = () => {
    const userData = form.getFieldsValue();

    dispatch(registerUserThunk(userData));

    form.resetFields();
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
          {
            min: 2,
            message: 'Your name should be more then two symbols!',
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

          {
            min: 7,
            message: 'Your password should be more then two symbols!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </StyledRegisterItem>

      <StyledRegisterItem {...tailFormItemLayout}>
        <StyledRegisterButton type="primary" htmlType="submit">
          Sign Up
        </StyledRegisterButton>
      </StyledRegisterItem>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
