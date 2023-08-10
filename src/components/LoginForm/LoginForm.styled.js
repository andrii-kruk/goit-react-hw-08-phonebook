import { Button, Form } from 'antd';

import styled from 'styled-components';

export const StyledForm = styled(Form)`
  max-width: 300px;
  position: relative;
  top: 50%;
  left: 50%;

  transform: translate(-50%, 100%);
`;

export const StyledButton = styled(Button)`
  margin-right: 24px;
`;
