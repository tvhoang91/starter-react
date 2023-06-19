import { Avatar, List } from 'antd';

import { generateProducts } from './product.data';

const data = generateProducts(7);

function ProductList() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.thumbnail} />}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
}

export default ProductList;
