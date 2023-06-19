import { Avatar, List } from 'antd';

import { generateEmployees } from './employee.data';

const data = generateEmployees(6);

function EmployeeList() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={item.title}
            description={item.bio}
          />
        </List.Item>
      )}
    />
  );
}

export default EmployeeList;
