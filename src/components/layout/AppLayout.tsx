import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import AppHeader from './AppHeader';

const { Content } = Layout;

function AppLayout() {
  return (
    <Layout className="h-screen">
      <AppHeader />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default AppLayout;
