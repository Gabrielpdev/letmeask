import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  maxWidthOn445?: boolean;
};

export function Button({ isOutlined, maxWidthOn445, ...props}: ButtonProps) {
  return (
    <Container 
      type="button" 
      $isOutlined={isOutlined} 
      $maxWidthOn445={maxWidthOn445} 
      {...props} 
    />
  );
}