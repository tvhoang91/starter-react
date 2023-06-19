import { Avatar, List } from 'antd';

import { generateProducts } from './product.data';

const data = generateProducts(7);

function ProductList() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(product) => (
        <List.Item key={product.id}>
          <List.Item.Meta
            avatar={<Avatar src={product.thumbnail} />}
            title={product.title}
            description={product.description}
          />
        </List.Item>
      )}
    />
  );
}

export default ProductList;
