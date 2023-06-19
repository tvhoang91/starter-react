import { Typography } from 'antd';

const { Title } = Typography;

function Home() {
  return (
    <>
      <Title className="text-center">Home</Title>
      <button className="btn">Click me</button>
    </>
  );
}

export default Home;
