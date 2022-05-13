import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';

const IconButtonComponent: React.FC<IconButtonProps> = ({
  children,
  ...props
}) => <IconButton {...props}>{children}</IconButton>;

export default IconButtonComponent;
