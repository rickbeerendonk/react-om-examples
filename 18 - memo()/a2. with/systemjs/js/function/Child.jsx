/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

import React from 'react';

import useFlashRef from './hooks/flash-ref';

function Child() {
  console.log('Render Child');
  return <h2 ref={useFlashRef()}>Child</h2>;
}

// Prevent renders when there are no new property values
const ChildMemo = React.memo(Child /* no custom comparison (2nd parameter) */);

export default ChildMemo;
