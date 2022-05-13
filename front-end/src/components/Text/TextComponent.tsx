import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

const TextComponent: React.FC<TypographyProps> = ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
);

export default TextComponent;
