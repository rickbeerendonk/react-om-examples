/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

class App extends React.Component {
  render() {
    const style = {
      fontSize: 48,
      fontStyle: 'italic',
      textDecoration: 'underline'
    };

    return <h1 style={style}>Hello React!</h1>;
  }
}

export default App;
