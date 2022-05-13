import React from 'react';
import { Box, BoxProps } from '@mui/material';

const BoxComponent: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box {...props}>{children}</Box>
);

export default BoxComponent;
