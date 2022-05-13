import React from 'react';
import {
  GridComponent,
  GridItemComponent
} from '../../components/Grid/GridComponent';
import HeaderComponent from '../../components/Header/HeaderComponent';
import BoxComponent from '../../components/Box/BoxComponent';
import TextComponent from '../../components/Text/TextComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { setTheme } from '../../themes/setThemes';
import DarkModeToggleComponent from '../../components/DarkModeToggle/DarkModeToggleComponent';

const HomeScreen: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  const { color, bgColor } = setTheme(darkMode);
  const handleDarkModeToggleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDarkMode(event.target.checked);
  };
  const HomeScreenHeader: React.FC = () => (
    <HeaderComponent sx={{ bgcolor: '#EA4700' }}>
      <GridComponent spacing={2} sx={{ padding: 1, alignItems: 'center' }}>
        <GridItemComponent xs={11}>
          <TextComponent>aqui vai ficar a logo</TextComponent>
        </GridItemComponent>
        <GridItemComponent xs={1}>
          <DarkModeToggleComponent
            checked={darkMode}
            onChange={handleDarkModeToggleChange}
          />
        </GridItemComponent>
      </GridComponent>
    </HeaderComponent>
  );

  return (
    <BoxComponent
      sx={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        justifyContent: 'center'
      }}
      bgcolor={bgColor}
      color={color}
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
