import React from 'react'
import { Layout, Menu } from 'antd';
import Details from '../../pages/DashBoard/Details';
// import style from './DashboardHeader.module.less'
const { Header,Content} = Layout;
const DashboardHeader = () => {
    return (
        <Layout>
             <Header style={{width: '100%', backgroundColor:'#fff', overflow:'hidden'  }}>
                <Menu  style={{fontSize:"18px",fontWeight:'bold', color:'#000', theam:'light', borderBottom:'none'}} mode="horizontal">
                    <Menu.Item  key="1">Details</Menu.Item>
                    <Menu.Item key="2">Payments</Menu.Item>
                    <Menu.Item key="3">Files</Menu.Item>
                    <Menu.Item key="4">Tasks</Menu.Item>
                    <Menu.Item key="5">Invite</Menu.Item>
                </Menu>
             </Header>
             <Content>
                 <Details/>
             </Content>
        </Layout>
    )
}

export default DashboardHeader;