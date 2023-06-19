import { useEmployeeStore } from '@src/stores/employeeStore';
import { Avatar, List } from 'antd';

function EmployeeList() {
  const data = useEmployeeStore((s) => s.items);

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(employee) => (
        <List.Item key={employee.id}>
          <List.Item.Meta
            avatar={<Avatar src={employee.avatar} />}
            title={employee.title}
            description={employee.bio}
          />
        </List.Item>
      )}
    />
  );
}

export default EmployeeList;
