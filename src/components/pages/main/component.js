import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from '../../../hooks';
import { GlobalStyles } from '../../style/global';
import { theme } from '../../style/theme';
// import { Burger, Menu } from '../../building_blocks/';
import BurgerMenu from "../../items/burger_menu"
import FocusLock from 'react-focus-lock';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
//   const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <BurgerMenu />
          </FocusLock>
        </div>
        <div>
            <div ref={node} >
            <FocusLock disabled={!open}>
            <h1 onClick={() => setOpen(!open)}>Burger</h1>
            </FocusLock>
            </div>
          <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
        </div>
        
      </>
    </ThemeProvider>
  );
}

export default App;
