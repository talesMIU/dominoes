import { AppBar, AppBarProps } from '@mui/material';
import React, { ReactNode } from 'react';

interface IHeaderProps extends AppBarProps {
  children: ReactNode;
}

const HeaderComponent: React.FC<IHeaderProps> = ({ children, ...props }) => (
  <AppBar {...props} position='static'>
    {children}
  </AppBar>
);

export default HeaderComponent;
