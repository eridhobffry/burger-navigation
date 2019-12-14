import React, {useState, useRef} from 'react';

import Burger from "../../building_blocks/burger"
import Menu from "../../building_blocks/menu"
import Text from "../../building_blocks/text_trigger"

import { useOnClickOutside } from '../../../hooks';

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  return (
      <>
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <Menu open={open} setOpen={setOpen} id={menuId} />
      <Text open={open} setOpen={setOpen} id={menuId} />
        </div>
      </>
  )
}


export default BurgerMenu;
