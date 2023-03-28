import { Layout, Menu } from 'antd'
import { useMemo } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const { Header, Content } = Layout

function AppLayout() {
  const location = useLocation()
  const selectedKeys = useMemo(() => {
    const path = location.pathname.split('/').filter((x) => x)
    return path.length > 0 ? [path[0]] : ['home']
  }, [location.pathname])

  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          items={[
            {
              key: 'home',
              label: <Link to="">Home</Link>,
            },
            {
              key: 'settings',
              label: <Link to="settings">Settings</Link>,
            },
          ]}
        />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default AppLayout
