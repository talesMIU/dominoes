import React from 'react';
import {
  GridComponent,
  GridItemComponent
} from '../../components/Grid/GridComponent';
import HeaderComponent from '../../components/Header/HeaderComponent';
import { Brightness6 } from '@mui/icons-material';
import BoxComponent from '../../components/Box/BoxComponent';
import TextComponent from '../../components/Text/TextComponent';
import IconButtonComponent from '../../components/IconButton/IconButtonComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';

const HomeScreen: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  const HomeScreenHeader: React.FC = () => (
    <HeaderComponent sx={{ bgcolor: '#EA4700' }}>
      <GridComponent spacing={2} sx={{ paddingLeft: 1, alignItems: 'center' }}>
        <GridItemComponent xs={11}>
          <TextComponent>aqui vai ficar a logo</TextComponent>
        </GridItemComponent>
        <GridItemComponent xs={1}>
          <DarkModeToggle />
        </GridItemComponent>
      </GridComponent>
    </HeaderComponent>
  );

  const DarkModeToggle: React.FC = () => {
    return (
      <IconButtonComponent
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        <Brightness6 sx={{ color: 'white' }} />
      </IconButtonComponent>
    );
  };

  function setTheme() {
    if (darkMode === true)
      return {
        bgColor: '#1C1A1A',
        color: '#E4E4E4'
      };
    return {
      bgColor: '#E4E4E4',
      color: '#1C1A1A'
    };
  }

  return (
    <BoxComponent
      sx={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        justifyContent: 'center'
      }}
      bgcolor={setTheme().bgColor}
      color={setTheme().color}
    >
      <HomeScreenHeader />
      <GridComponent sx={{ justifyContent: 'center' }}>
        <GridItemComponent xs={12}>
          <TextComponent variant='h1' align='center'>
            DOMINOES
          </TextComponent>
        </GridItemComponent>
        <GridItemComponent>
          <ButtonComponent
            variant={'contained'}
            sx={{ backgroundColor: '#EA4700' }}
          >
            <TextComponent>Jogar</TextComponent>
          </ButtonComponent>
        </GridItemComponent>
      </GridComponent>
    </BoxComponent>
  );
};

export default HomeScreen;
