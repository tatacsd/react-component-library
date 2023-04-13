import * as React from 'react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    label: 'Button',
    backgroundColor: 'red',
  },
};

export const Primary = (args: ButtonProps) => <Button {...args} />;
export const Secondary = (args: ButtonProps) => <Button {...args} />;
