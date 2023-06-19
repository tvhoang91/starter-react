import PageContainer from '@src/components/layout/PageContainer';
import { ConfigProvider, Typography } from 'antd';
import clsx from 'clsx';
import { useState } from 'react';

import DemoSteps from './DemoSteps';
import classes from './Home.module.css';

const { Title } = Typography;

/**
 * className tailwindcss
 * antd ConfigProvider
 * className css module
 * clsx library
 * btn global style
 */
function Home() {
  const [isHightlighted, setIsHightlighted] = useState(false);

  return (
    <PageContainer>
      <Title level={4} className="text-center">
        Demo Style Manipulate
      </Title>

      <ConfigProvider
        theme={{
          components: {
            Steps: {
              colorText: '#f87171',
            },
          },
        }}
      >
        <DemoSteps className="flex-1" />
      </ConfigProvider>

      <DemoSteps className={`flex-1 ${classes.homeSteps}`} />

      <button
        className={clsx('btn flex-none', {
          'border-white outline outline-1 outline-offset-2 outline-emerald-600': isHightlighted,
        })}
        onClick={() => setIsHightlighted((bool) => !bool)}
      >
        Click me
      </button>
    </PageContainer>
  );
}

export default Home;
