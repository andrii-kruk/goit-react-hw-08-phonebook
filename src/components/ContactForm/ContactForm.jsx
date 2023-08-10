import React from 'react';
import { PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { StyledItem, StyledContactsForm } from './ContactForm.styled';

const ContactForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <StyledContactsForm
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input Name!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Name"
        />
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input Phone!',
          },
        ]}
      >
        <Input prefix={<PhoneOutlined />} type="tel" placeholder="Phone" />
      </Form.Item>
      <StyledItem>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Add contact
        </Button>
      </StyledItem>
    </StyledContactsForm>
  );
};

export default ContactForm;
