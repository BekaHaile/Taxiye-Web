import { FunctionComponent } from "react";
import { Drawer, Layout, Menu, Avatar, Typography, Space, Button } from "antd";
import theme from "../../../theme/main";
const { Text } = Typography;
import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  CarOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  GroupOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSelector } from "react-redux";
import store from "../../../redux/store";
import {
  changeMenuItem,
  changeVisibiity,
} from "../../../redux/actions/user/sider";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const ProfileView = styled.div`
  height: 150px;
  text-align: center;
  padding: 20px;
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

const Slider = () => {
  const [collapsed, onCollapse] = useState(false);
  const selected = useSelector((state) => state["user_sider"]["menu_item"]);
  const full_name = useSelector(
    (state) => state["corporate_account"]["user"]["full_name"]
  );
  const profile = useSelector(
    (state) => state["corporate_account"]["user"]["profile"]
  );
  const company_name = useSelector(
    (state) => state["corporate_account"]["company"]["name"]
  );
  const visible = useSelector((state) => state["user_sider"]["visbility"]);
  if(selected==="booking")
  return (
    <Drawer
      closable={false}
      visible={visible}
      placement="left"
      bodyStyle={{ padding: "0px" }}
      onClose={() =>
        selected == "booking" ? store.dispatch(changeVisibiity()) : null
      }
      width={256}
    >
      {menus(selected, profile, full_name, company_name)}
    </Drawer>
  );
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        backgroundColor: `${theme.colors.white}`,
      }}
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={256}
    >
      {menus(selected, profile, full_name, company_name)}
    </Sider>
  );

};

function menus(selected, profile, full_name, company_name) {
  return (
    <>
      <ProfileView
        className="user-profile"
        onClick={() => store.dispatch(changeMenuItem("account-setting"))}
      >
        <Space size={5} align="center" direction="vertical">
          <Avatar src={profile} size={64} icon={<UserOutlined />} />
          <Space size={10} direction="vertical">
            <Name>{full_name}</Name>
            <CompanyName>{company_name}</CompanyName>
          </Space>
        </Space>
      </ProfileView>
      <Menu
        onSelect={(item) => store.dispatch(changeMenuItem(item.key))}
        defaultSelectedKeys={["booking"]}
        selectedKeys={[selected]}
        mode="inline"
      >
        <Menu.Item key="booking" icon={<HomeOutlined />}>
          Get a Ride
        </Menu.Item>
        <Menu.Item key="my-orders" icon={<TeamOutlined />}>
          My Orders
        </Menu.Item>
        <Menu.Item key="wallet" icon={<GroupOutlined />}>
          Wallet
        </Menu.Item>
        <Menu.Item key="payment-method" icon={<DesktopOutlined />}>
          Payment Method
        </Menu.Item>
        <Menu.Item key="promotions" icon={<FileOutlined />}>
          Promotions
        </Menu.Item>
        <Menu.Item key="invite-friends" icon={<UsergroupAddOutlined />}>
          Invite Friends
        </Menu.Item>
        <Menu.Item key="support" icon={<DesktopOutlined />}>
          Support
        </Menu.Item>
        <Menu.Item key="account-Setting" icon={<FileOutlined />}>
          Account Setting
        </Menu.Item>
        <Menu.Item key="logout" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
        <Menu.Item key="homepage" icon={<FileOutlined />}>
          Homepage
        </Menu.Item>
        <Menu.ItemGroup className="bottom_menu_items">
          <Link href="/">
            <Logo src={require("../../../assets/images/logo/logo2.svg")} />
          </Link>
        </Menu.ItemGroup>
      </Menu>
    </>
  );
}

export default Slider;
