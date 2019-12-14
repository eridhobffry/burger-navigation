import React from 'react';
import { bool, func } from 'prop-types';
import {StyledText} from "../../style/text_trigger"

const TextTrigger = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledText aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      Open the gate
    </StyledText>
  )
}

TextTrigger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default TextTrigger;
