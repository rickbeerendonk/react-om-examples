/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function App() {
  const hide = true;

  return (
    <React.Fragment>
      <h3>Conditional:</h3>
      {!hide || <div>Visible</div>}
    </React.Fragment>
  );
}

export default App;
