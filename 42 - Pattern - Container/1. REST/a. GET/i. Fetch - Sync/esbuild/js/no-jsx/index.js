/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import PostListContainer from './PostListContainer.js';

const root = createRoot(document.getElementById('root'));
root.render(createElement(PostListContainer));
