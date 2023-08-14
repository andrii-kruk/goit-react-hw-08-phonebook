import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { StyledLoader } from './Loader.styled';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 60,
    }}
    spin
  />
);
const Loader = () => <StyledLoader indicator={antIcon} />;
export default Loader;
