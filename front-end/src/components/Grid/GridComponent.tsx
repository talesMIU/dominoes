import { Grid, GridProps } from '@mui/material';
import React from 'react';

export const GridComponent: React.FC<GridProps> = ({ children, ...props }) => (
  <Grid {...props} container={true}>
    {children}
  </Grid>
);

export const GridItemComponent: React.FC<GridProps> = ({
  children,
  ...props
}) => (
  <Grid {...props} item={true}>
    {children}
  </Grid>
);
