import React from 'react';

import { Toolbar, ToolbarProps } from '@mui/material';

const ToolbarComponent: React.FC<ToolbarProps> = ({ children, ...props }) => (
  <Toolbar {...props}>{children}</Toolbar>
);

export default ToolbarComponent;
