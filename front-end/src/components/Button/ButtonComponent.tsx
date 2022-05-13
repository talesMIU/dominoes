import React from 'react';

import { Button, ButtonProps } from '@mui/material';

const ButtonComponent: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default ButtonComponent;
