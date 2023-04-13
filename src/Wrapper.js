<<<<<<< HEAD
import React from 'react';

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
=======
import React, { Children } from 'react';

function Wrapper({children}) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };

    return (
        <div style={style}>
            {children}
        </div>
    )
>>>>>>> 3c9b319f2a53e7ab6ba962509b5d3342dc0248bf
}

export default Wrapper;