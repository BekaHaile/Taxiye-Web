import { FunctionComponent } from "react";
import { Layout, Menu, Avatar, Typography, Space } from "antd";
import theme from "../../../../theme/main";
const { Text } = Typography;
import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  CarOutlined,
  HomeOutlined,
  GroupOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSelector } from "react-redux";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const ProfileView = styled.div`
  height: 150px;
  text-align: center;
  padding:20px;

`;
const BottomMenu = styled(Menu)`
  position: absolute;
  bottom: 0;
  padding-bottom: 20px;
`;
const Logo = styled.img`
  height: auto;
  width: 65px;
  margin: auto;
  display: block;
`;

const Name = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: ${theme.colors.primaryTextColor}; ;
`;
const CompanyName = styled("p")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.secondaryTextColor};
`;
interface Props {
  setSelected;
  selected;
}

const Slider: FunctionComponent<Props> = ({ setSelected, selected }) => {
  const [collapsed, onCollapse] = useState(false);
  const full_name = useSelector(
    (state) => state["corporate_account"]["user"]["full_name"]
  );
  const profile = useSelector(
    (state) => state["corporate_account"]["user"]["profile"]
  );
  const company_name = useSelector(
    (state) => state["corporate_account"]["company"]["name"]
  );

  return (
    <Sider
      style={{ backgroundColor: `${theme.colors.white}` }}
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={256}
    >
      <ProfileView className="user-profile" onClick={()=>setSelected("account-setting")}>
        <Space size={5} align="center" direction="vertical">
          <Avatar src={profile} size={64} icon={<UserOutlined />} />
          <Space size={10} direction="vertical">
            <Name>{full_name}</Name>
            <CompanyName>{company_name}</CompanyName>
          </Space>
        </Space>
      </ProfileView>
      <Menu
        onSelect={(item) => setSelected(item.key)}
        defaultSelectedKeys={["home-page"]}
        selectedKeys={[selected]}
        mode="inline"
      >
        <Menu.Item key="home-page" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="employees" icon={<TeamOutlined />}>
          Employees
        </Menu.Item>
        <Menu.Item key="groups" icon={<GroupOutlined />}>
          Groups
        </Menu.Item>
        <Menu.Item key="dispatch" icon={<DesktopOutlined />}>
          Dispatch
        </Menu.Item>

        <SubMenu key="rides" icon={<CarOutlined />} title="Rides">
          <Menu.Item key="on-going">Ongoing</Menu.Item>
          <Menu.Item key="completed">Completed</Menu.Item>
        </SubMenu>
        <Menu.Item key="requests" icon={<FileOutlined />}>
          Requests
        </Menu.Item>
        <Menu.ItemGroup className="bottom_menu_items">
          <Menu.Item key="account-setting" icon={<SettingOutlined />}>
            Account Settings
          </Menu.Item>
          <Menu.Item onClick={()=>alert("ya")} key="9" icon={<LogoutOutlined />}>
            Log out
          </Menu.Item>
          <Link href="/">
            <Logo src={require("../../../../assets/images/logo/logo2.svg")} />
          </Link>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};

export default Slider;
