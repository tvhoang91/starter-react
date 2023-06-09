import PageContainer from '@src/components/layout/PageContainer';
import { Typography } from 'antd';

import EmployeeList from './EmployeeList';
import ProductList from './ProductList';

const { Title } = Typography;

function ListPage() {
  return (
    <PageContainer>
      <div className="grid h-full w-full grid-cols-2 gap-6">
        <div className="overflow-auto">
          <Title level={5} className="text-center">
            Folder List
          </Title>
          <ProductList />
        </div>
        <div className="overflow-auto">
          <Title level={5} className="text-center">
            Employee List
          </Title>
          <EmployeeList />
        </div>
      </div>
    </PageContainer>
  );
}

export default ListPage;
