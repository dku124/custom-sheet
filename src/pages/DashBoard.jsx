import { CaretDownOutlined, CloseOutlined, FileDoneOutlined, PieChartOutlined, SmileTwoTone, TableOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Dropdown, Flex, Space, Table, message } from "antd"
import { useState } from "react";
import { Link } from "react-router-dom";

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items = [
  {
    label: 'Doc',
    key: '1',
    icon: <FileDoneOutlined className="text-[#336DF4] font-bold" style={{fontSize:'24px'}}/>,
  },
  {
    label: <Link to='/sheet'>Sheet</Link>,
    key: '2',
    icon: <TableOutlined  className="text-[#336DF4] font-bold" style={{fontSize:'24px'}}/>,
  },
  {
    label: 'Slides',
    key: '3',
    icon: <PieChartOutlined className="text-[#336DF4] font-bold" style={{fontSize:'24px'}}/>,
  },
  {
    label: 'Base',
    key: '4',
    icon: <UserOutlined className="text-[#336DF4] font-bold" style={{fontSize:'24px'}}/>,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};


// DATA TABLE
const data = [
  {
    key: '1',
    name: 'Getting Started with Lark Doc',
    owner: 'Doc Assistant',
    date: 'Today',
  },
  {
    key: '2',
    name: 'Form',
    owner: 'Owner',
    date: 'Today',
  },
  {
    key: '3',
    name: 'Untitled spreadsheet',
    owner: 'Owner',
    date: 'Yesterday',
  }
];


function DashBoard() {

//table

const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const columns = [
    {
      title: 'All Types',
      dataIndex: 'name',
      key: 'name',
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Owner By Anyone',
      dataIndex: 'owner',
      key: 'owner',
      filters: [
        {
          text: 'Owner By Anyone',
        },
        {
          text: 'Owner By Me',
        },
      ],
      sorter: (a, b) => a.owner.length - b.owner.length,
      sortOrder: sortedInfo.columnKey === 'owner' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Date Post',
      dataIndex: 'date',
      key: 'date',
      filters: [
        {
          text: 'Last Opend',
        },
        {
          text: 'Last Modifier',
        },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

//--end table

  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-bold text-[28px]">Home</h2>
        <Flex gap="small" wrap="wrap">
          <Button className="border-[#336DF4] text-[#336DF4] flex items-center"><SmileTwoTone twoToneColor="#eb2f96" />Template </Button>
          <Button className="border-[#336DF4] text-[#336DF4] flex items-center">Upload <CaretDownOutlined /></Button>
          <Dropdown menu={menuProps}>
            <Button className="text-[#fff] bg-[#336DF4]">
              <Space>
                New
                <CaretDownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Flex>
      </div>
      <div className="bg-[#F0F4FF] p-[2rem] mt-[1rem] relative rounded-[1rem]">
        <h3 className="text-[32px] mt-[2rem]">Getting Started with Lark</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dicta voluptates quidem cumque voluptatem pariatur dolore veritatis repellat facere provident odio nulla animi odit, ipsum quis, consequatur, sed corrupti quod!</p>
        <span className="absolute top-[1rem] right-4"><CloseOutlined className="text-[20px]"/></span>  
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-[20px] mb-4">Recent</h2>
        <Table columns={columns} dataSource={data} onChange={handleChange} />
        {/* <Sheet/> */}
      </div>
    </>
  )
}

export default DashBoard