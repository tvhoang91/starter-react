import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Card, Layout, Menu, MenuProps } from 'antd';
import { css } from 'twin.macro';

const { Content, Sider, Header } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const scrollbarStyle = css`
  scrollbar-width: thin;
  scrollbar-color: #94a3b8;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #94a3b8;
  }
`;

function AdminLayout() {
  return (
    <Layout className="h-screen">
      <Sider collapsible tw="[.ant-layout-sider-children]:(flex flex-col)">
        <div className="sticky top-0 z-10 flex h-16 flex-none items-center justify-center border-b border-b-slate-600">
          <h2 className="text-xl font-bold text-white">LOGO</h2>
        </div>
        <Menu
          className="overflow-auto overscroll-none py-3"
          css={scrollbarStyle}
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="overflow-auto overscroll-none">
        <Header className="sticky top-0 z-10 h-16 bg-white shadow-md">Header</Header>
        <Content>
          <div className="min-h-full rounded p-6">
            <div className="grid grid-cols-3 gap-4">
              {Array(10)
                .fill(0)
                .map((_, i) => i)
                .map((i) => (
                  <Card key={i} title="Card title" bordered={false}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                ))}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
