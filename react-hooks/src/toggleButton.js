import React, { useState } from 'react';

export const ToggleButton = (props) => {
  const [toggleState, setToggleState] = useState('On');
  const [toggleMessage, setToggleMessage] = useState(props.toggleText)

  return (
    <>
    {toggleMessage}
    <br/>
    <button onClick={() => {
      if (toggleState === 'Off') {
        setToggleState('On');
        setToggleMessage(props.toggleText);
      } else {
        setToggleState('Off');
        setToggleMessage("");
      }
    }
    }>
    {toggleState}
    </button>
    <br/>
    </>
  )
}