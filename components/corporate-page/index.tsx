import { Layout} from "antd";
import Sider from "./sider";
import HomePage from "./home";

const { Content } = Layout;


const Cms = () => {


  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider/>
      <Layout className="site-layout">
        <Content style={{ margin: "16px" }}>
         <HomePage/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Cms;
