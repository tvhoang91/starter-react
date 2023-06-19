import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps, StepsProps } from 'antd';

function DemoSteps(props: StepsProps) {
  return (
    <Steps
      {...props}
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
    ></Steps>
  );
}

export default DemoSteps;
