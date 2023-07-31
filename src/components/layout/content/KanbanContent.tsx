import { Card } from 'antd';
import { Content } from 'antd/es/layout/layout';

const board = [4, 2, 5, 3, 2];

function KanbanContent() {
  return (
    <Content className="flex-1 bg-green-400 py-6">
      <div className="h-full w-full overflow-x-auto overscroll-none bg-red-400 px-6">
        <div className="flex h-full w-fit flex-nowrap gap-4 bg-blue-400">
          {board.map((listLength, index) => (
            <div
              key={index}
              className="flex w-64 flex-none flex-col gap-3 overflow-y-auto bg-indigo-100"
            >
              {Array(listLength)
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
          ))}
        </div>
      </div>
    </Content>

    // <div className="flex-1 overflow-auto overscroll-none bg-green-50">
    //   <div className="flex flex-nowrap gap-4">
    //     {board.map((listLength, index) => (
    //       <div key={index} className="flex w-64 flex-none flex-col gap-3 bg-green-100">
    //         {Array(listLength)
    //           .fill(0)
    //           .map((_, i) => i)
    //           .map((i) => (
    //             <Card key={i} title="Card title" bordered={false}>
    //               <p>Card content</p>
    //               <p>Card content</p>
    //               <p>Card content</p>
    //             </Card>
    //           ))}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default KanbanContent;
