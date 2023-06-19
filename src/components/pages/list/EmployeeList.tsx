import { Avatar, List } from 'antd';

import { generateEmployees } from './employee.data';

const data = generateEmployees(6);

function EmployeeList() {
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
