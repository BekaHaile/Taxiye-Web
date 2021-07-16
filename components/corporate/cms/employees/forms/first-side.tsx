import React from "react";
import styled from "styled-components";
import { Table, Tag, Space } from 'antd';
import theme from "../../../../../theme/main";
import { useSelector } from "react-redux";
import store from "../../../../../redux/store";
import {
  addGroupName,
  addMonthlyBudget,
  addMonthlyRide,
  changePaymentMode,
} from "../../../../../redux/actions/corporate/group";

const CustomSpace = styled(Space)`
  width: 100%;
  justify-content: space-between;
`;

const Title = styled("div")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
  color: ${theme.colors.primaryLabelColor};
`;
const Detail = styled("div")`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 15px;
  color: ${theme.colors.primaryLabelColor};
  width: 222px;
`;
const columns = [
  {
    title: 'Phone Number',
    dataIndex: 'phone_number',
    key: 'phone_number',
    render: text => <a>{text}</a>,
  },
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Email Address',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Group',
    dataIndex: 'group',
    key: 'group',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    phone_number: '978686876',
    first_name: 'John Brown',
    last_name: 'John Brown',
    email: 'New York No. 1 Lake Park',
    group: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  
];
const FormView = () => {
  

  return (
    <>
      <Table dataSource={data} columns={columns}/>
    </>
  );
};

export default FormView;
