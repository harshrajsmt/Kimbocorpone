import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Details from '../../pages/DashBoard/Details';
import Payments from '../../pages/DashBoard/Payments';
// import style from './DashboardHeader.module.less'
const { Header,Content} = Layout;
const DashboardHeader = () => {
    const [content, setContent] = useState(<Details/>)
    return (
        <Layout>
             <Header style={{width: '100%', backgroundColor:'#fff', overflow:'hidden'  }}>
                <Menu  style={{fontSize:"18px",fontWeight:'bold', color:'#000', theam:'light', borderBottom:'none'}} mode="horizontal">
                    <Menu.Item  key="1" onClick={()=>{setContent(<Details/>)}}>Details</Menu.Item>
                    <Menu.Item key="2" onClick={()=>{setContent(<Payments/>)}}>Payments</Menu.Item>
                    <Menu.Item key="3">Files</Menu.Item>
                    <Menu.Item key="4">Tasks</Menu.Item>
                    <Menu.Item key="5">Invite</Menu.Item>
                </Menu>
             </Header>
             <Content>
                 {content}
             </Content>
        </Layout>
    )
}

export default DashboardHeader;