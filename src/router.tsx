import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/layout/AppLayout';
import Home from './components/pages/home/Home';
import Settings from './components/pages/settings/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

export default router;
