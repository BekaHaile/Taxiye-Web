import { FunctionComponent } from "react";
import { Layout, Menu, Avatar, Typography, Space } from "antd";
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

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const ProfileView = styled.div`
  height: 150px;
  text-align: center;
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

const Name = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #444444;
`;
const CompanyName = styled(Text)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #979797;
`;
interface Props {
  setSelected;
}

const Slider: FunctionComponent<Props> = ({ setSelected }) => {
  const [collapsed, onCollapse] = useState(false);

  return (
    <Sider
      style={{ backgroundColor: "#fff" }}
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <ProfileView className="user-profile">
        <Space size={5} align="center" direction="vertical">
          <Avatar src="" size={64} icon={<UserOutlined />} />
          <Space size={10} direction="vertical">
            <Name>Nahom Ab</Name>
            <CompanyName>Corporate Company Name</CompanyName>
          </Space>
        </Space>
      </ProfileView>
      <Menu
        onSelect={(item) => setSelected(item.key)}
        defaultSelectedKeys={["home-page"]}
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

        <SubMenu key="sub1" icon={<CarOutlined />} title="Rides">
          <Menu.Item key="5">Ongoing</Menu.Item>
          <Menu.Item key="6">Completed</Menu.Item>
        </SubMenu>
        <Menu.Item key="7" icon={<FileOutlined />}>
          Requests
        </Menu.Item>
      </Menu>
      <BottomMenu defaultSelectedKeys={["home-page"]} mode="inline">
        <Menu.Item key="8" icon={<SettingOutlined />}>
          Account Settings
        </Menu.Item>
        <Menu.Item key="9" icon={<LogoutOutlined />}>
          Log out
        </Menu.Item>
        <Link href="/">
          <Logo src={require("../../../assets/images/logo/logo2.svg")} />
        </Link>
      </BottomMenu>
    </Sider>
  );
};

export default Slider;
