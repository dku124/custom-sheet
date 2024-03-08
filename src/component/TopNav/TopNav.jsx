import {  AppstoreOutlined, DockerOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PhoneOutlined, SearchOutlined, UserAddOutlined } from "@ant-design/icons"
import { Input, Tooltip } from "antd"


import { Menu } from 'antd';
import { useState } from "react";
const items = [
  {
    key: 'mail',
    icon: <DockerOutlined />,
  },
  {
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'menu',
    icon: <MenuFoldOutlined />
  },
  {
    key: 'phone',
    icon: <PhoneOutlined />
  },
  {
    key: 'user',
    icon: <UserAddOutlined className="bg-[#00CCB1] p-[1rem] rounded-[50%]"/>,
  },
];

function TopNav() {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className="flex items-center justify-between p-[1rem] pt-0">
      <Input className="w-[40%] h-[40px]"
        placeholder="Search"
        prefix={<SearchOutlined /> }
        suffix={
          <Tooltip title="Advanced search">
            <MenuUnfoldOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }

      />
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className="border-b-0"/>
    </div>
  )
}

export default TopNav