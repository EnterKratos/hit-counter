'use client';
import React from 'react';

function CensorToggle({ children }) {
  const [censored, setCensored] = React.useState(true);

  function handleClick(e) {
    setCensored(!censored);
  }

  return (
    <button onClick={handleClick} className={censored ? 'censored' : undefined} >{children}</button>
  )
}

export default CensorToggle;