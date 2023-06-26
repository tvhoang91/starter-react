import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/layout/AppLayout';
import Home from './components/pages/home/Home';
import ListPage from './components/pages/list/ListPage';
import TwinPage from './components/pages/twin/TwinPage';

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
        path: 'list',
        element: <ListPage />,
      },
      {
        path: 'twin',
        element: <TwinPage />,
      },
    ],
  },
]);

export default router;
