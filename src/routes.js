import * as React from 'react';

import { asyncComponent } from '@jaredpalmer/after';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./Home'), // required
      Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    }),
  },
  {
    path: '/about/:id',
    exact: true,
    component: asyncComponent({
      loader: () => import('./About.tsx'),
      Placeholder: () => <div>...LOADING...</div>
    }),
  },
];
