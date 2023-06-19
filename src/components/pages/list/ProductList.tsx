import { useProductStore } from '@src/stores/productStore';
import { Avatar, List } from 'antd';

function ProductList() {
  const data = useProductStore((s) => s.items);

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
