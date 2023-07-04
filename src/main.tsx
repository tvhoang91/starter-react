import 'antd/dist/reset.css';
import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import AdminLayout from './components/layout/AdminLayout';
import GlobalStyles from './GlobalStyles';
import router from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <AdminLayout />
    {/* <RouterProvider router={router}></RouterProvider> */}
  </React.StrictMode>,
);
