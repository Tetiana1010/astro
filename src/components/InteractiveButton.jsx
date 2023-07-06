import React, { useState } from 'react';

function InteractiveButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button onClick={handleClick}>
      {isClicked ? 'Clicked' : 'Click Me'}
    </button>
  );
}

export default InteractiveButton;
