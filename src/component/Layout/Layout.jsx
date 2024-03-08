import Router from "../../Router/Router"
import SideBar from "../SideBar/SideBar"
import TopNav from "../TopNav/TopNav"
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;



function LayoutLark() {


  return (
    <>
      <Layout className="h-[100vh]">
          <SideBar />
        <Layout className="bg-[#fff]">
          <Header className="bg-[#fff] p-0"><TopNav/></Header>
          <Content className="p-[1rem]"><Router/></Content>
          <Footer className="bg-[#fff]">Footer</Footer>
        </Layout>
      </Layout>
    </>
  )
}

export default LayoutLark