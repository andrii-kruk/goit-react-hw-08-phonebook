import { Spin } from 'antd';
import styled from 'styled-components';

export const StyledLoader = styled(Spin)`
  position: absolute;
  top: 100%;
  left: 50%;

  transform: translateY(500%);
`;
