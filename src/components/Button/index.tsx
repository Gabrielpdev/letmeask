import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined, ...props}: ButtonProps) {
  return (
    <Container type="button" $isOutlined={isOutlined} {...props} />
  );
}