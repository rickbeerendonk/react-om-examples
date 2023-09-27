/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk     !*/

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const root = createRoot(document.getElementById('root') as Element);
root.render(<App />);
