import { CalendarOutlined, DeleteOutlined, FileSyncOutlined, HeartOutlined, HomeFilled, ProfileOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

function getItem(label, path, icon, key) {
  return {
    path,
    icon,
    label,
    key
  };
}

const items = [
  getItem('DashBoard', '/dashboard', <HomeFilled />, '1'),
  getItem('MySpace', '/my-spaces', <CalendarOutlined />, '2'),
  getItem('Share Spaces', '/share-spaces', <UsergroupAddOutlined />, '3'),
  getItem('Wiki', '/wiki', <ProfileOutlined />, '4'),
  getItem('Lingo', '/lingo', <FileSyncOutlined />, '5'),
  getItem('Favorites', '/favorites', <HeartOutlined />, '6'),
  getItem('Trash', '/trash', <DeleteOutlined />, '7'),
];



function SideBar() {
  return (
    <>
      <Sider style={{ background: '#F5F6F7' }} className="py-[2rem] w-[300px]">
        <Menu className="bg-transparent border-[0]" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>

    </>
  )
}

export default SideBar