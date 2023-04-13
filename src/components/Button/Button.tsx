import React from 'react';
import './Button.css';

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
}

const Button = ({ label, backgroundColor }: ButtonProps) => {
  return <button style={{ backgroundColor }}>{label}</button>;
};

export default Button;
