import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/layout/AppLayout';
import Home from './components/pages/home/Home';
import ListPage from './components/pages/list/ListPage';

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
    ],
  },
]);

export default router;
