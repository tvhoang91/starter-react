import 'antd/dist/reset.css';
import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import AdminLayout from './components/layout/AdminLayout';
import GlobalStyles from './GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <AdminLayout />
  </React.StrictMode>,
);
