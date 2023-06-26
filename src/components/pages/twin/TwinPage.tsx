import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import PageContainer from '@src/components/layout/PageContainer';
import { Steps, Typography } from 'antd';
import tw from 'twin.macro';

const { Title } = Typography;

const ScarletSteps = tw(Steps)`
  [.ant-steps-item:not(.ant-steps-item-wait) .ant-steps-item-title]:!text-red-400
`;

function TwinPage() {
  return (
    <PageContainer>
      <Title level={4} tw="text-center">
        Style Manipulation
      </Title>

      <ScarletSteps
        items={[
          {
            title: 'Login',
            status: 'finish',
            icon: <UserOutlined />,
          },
          {
            title: 'Verification',
            status: 'finish',
            icon: <SolutionOutlined />,
          },
          {
            title: 'Pay',
            status: 'process',
            icon: <LoadingOutlined />,
          },
          {
            title: 'Done',
            status: 'wait',
            icon: <SmileOutlined />,
          },
        ]}
      ></ScarletSteps>
    </PageContainer>
  );
}

export default TwinPage;
