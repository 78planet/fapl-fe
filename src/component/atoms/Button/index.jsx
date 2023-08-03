import React from 'react';
import * as S from './style';

// 버튼 컴포넌트를 생성합니다.
const Button = ({ children, onClick }) => {
    return <S.StyledButton onClick={onClick}>{children}</S.StyledButton>;
  };
  
  export default Button;
  