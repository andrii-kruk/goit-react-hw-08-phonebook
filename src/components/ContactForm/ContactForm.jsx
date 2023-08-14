import React from 'react';
import { PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { StyledItem, StyledContactsForm } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/reducers/contactsReducer';

const ContactForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = () => {
    const contact = form.getFieldsValue();
    dispatch(addContact(contact));

    form.resetFields();
  };
  return (
    <StyledContactsForm
      form={form}
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
        name="number"
        rules={[
          {
            required: true,
            message: 'Please input Number!',
          },
        ]}
      >
        <Input prefix={<PhoneOutlined />} type="tel" placeholder="Number" />
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
