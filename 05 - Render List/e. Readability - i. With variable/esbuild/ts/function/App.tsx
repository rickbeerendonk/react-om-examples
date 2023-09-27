/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';

function App() {
  const names = ['Alexandra', 'Benjamin', 'Charlotte'];

  let nameListItems = new Array<React.JSX.Element>();
  for (const name of names) {
    nameListItems.push(<li key={name}>Hello {name}</li>);
  }

  return (
    <>
      <h1>Greetings</h1>
      <ul>{nameListItems}</ul>
    </>
  );
}

export default App;
