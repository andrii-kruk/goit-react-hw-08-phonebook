import { Input } from 'antd';
import styled from 'styled-components';

export const StyledFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const StyledFilter = styled(Input)`
  display: block;
  width: 320px;

  margin-bottom: 24px;
`;
