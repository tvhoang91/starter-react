import { Card } from 'antd';
import { Content } from 'antd/es/layout/layout';

function ListContent() {
  return (
    <Content className="overflow-auto bg-green-400 p-6">
      <div className="grid grid-cols-3 gap-4">
        {Array(20)
          .fill(0)
          .map((_, i) => i)
          .map((i) => (
            <Card key={i} title="Card title" bordered={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          ))}
      </div>
    </Content>

    // <div className="flex-1 overflow-auto overscroll-none">
    //   <div className="mx-6 mb-6 grid grid-cols-3 gap-4">
    //     {Array(20)
    //       .fill(0)
    //       .map((_, i) => i)
    //       .map((i) => (
    //         <Card key={i} title="Card title" bordered={false}>
    //           <p>Card content</p>
    //           <p>Card content</p>
    //           <p>Card content</p>
    //         </Card>
    //       ))}
    //   </div>
    // </div>
  );
}

export default ListContent;
