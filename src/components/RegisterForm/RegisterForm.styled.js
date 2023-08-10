import { Button, Form } from 'antd';
import styled from 'styled-components';

export const StyledRegisterForm = styled(Form)`
  position: relative;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  gap: 18px;

  transform: translate(-50%, 50%);
`;

export const StyledRegisterItem = styled(Form.Item)`
  max-width: 424px;
  margin: 0;
`;
export const StyledRegisterButton = styled(Button)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
