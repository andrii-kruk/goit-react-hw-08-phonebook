import styled from 'styled-components';

export const StyledListItem = styled.li`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 12px;

  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0.01;
`;

export const StyledButton = styled.button`
  display: inline-block;
  position: relative;
  height: 32px;

  padding: 4px 15px;

  color: #fff;
  background-color: #1677ff;
  border-radius: 6px;
  border: 1px solid transparent;
  background-image: none;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  outline: none;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  white-space: nowrap;
  text-align: center;

  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;
