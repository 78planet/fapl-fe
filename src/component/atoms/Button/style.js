import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  background-color: #c688f5;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b36bf2;
  }

  &:focus {
    outline: none;
  }
`;

