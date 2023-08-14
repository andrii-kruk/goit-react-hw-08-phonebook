import React from 'react';
import { StyledFilter, StyledFilterWrapper } from './Filter.styled';
import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Filter = ({ onChange, filterValue, onClear }) => {
  return (
    <StyledFilterWrapper>
      <StyledFilter
        placeholder="Filter your contacts"
        onChange={onChange}
        value={filterValue}
      />
      <Button
        icon={<CloseOutlined />}
        onClick={onClear}
        aria-label="Clear filter input"
      />
    </StyledFilterWrapper>
  );
};

export default Filter;
