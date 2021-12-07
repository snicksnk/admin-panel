import { ReactNode, CSSProperties } from 'react';
import styled from 'styled-components/macro';

interface InputWrapProps {
  title: string
  children: ReactNode
  hasError?: boolean
  style?: CSSProperties
}

export default function InputWrap({
  title, children, hasError, style = {},
}: InputWrapProps) {
  return (
    <InputWrapBlock style={style} hasError={hasError}>
      <Label>
        {title}
      </Label>
      {children}
    </InputWrapBlock>
  );
}

const InputWrapBlock = styled.div<{ hasError?: boolean }>`
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 24px;
  & input, textarea {
    border-color: ${(props) => (props.hasError ? 'red' : 'default')}
  }
`;

const Label = styled.label`
  font-size: 16px;
  color: #1F1F1F;
  margin-bottom: 4px;
`;
