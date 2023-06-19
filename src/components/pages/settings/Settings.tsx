import PageContainer from '@src/components/layout/PageContainer';
import { Typography } from 'antd';

const { Title } = Typography;

function Settings() {
  return (
    <PageContainer>
      <Title level={2} className="text-center">
        Settings
      </Title>
    </PageContainer>
  );
}

export default Settings;
