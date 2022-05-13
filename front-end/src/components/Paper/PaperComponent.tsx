import { Paper, PaperProps } from '@mui/material';

const PaperComponent: React.FC<PaperProps> = ({ children, ...props }) => (
  <Paper {...props}>{children}</Paper>
);

export default PaperComponent;
