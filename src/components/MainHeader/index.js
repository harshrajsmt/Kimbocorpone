import React from 'react'
import {VscBell} from 'react-icons/vsc';
import { BiMessage } from 'react-icons/bi';
import { Layout, Col, Row, Input, Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import style from './MainHeader.module.less'
import DashboardHeader from '../DashboardHeader';
const { Header, Content} = Layout;
const { Search } = Input;
const suffix = (
    <CaretDownOutlined 
      style={{
        fontSize: 25,
        color: '#00ac8c',
      }}
    />
  );
const MainHeader = () => {
    return (
        <Layout>
             <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor:'#00ac8c', overflow:'hidden' }}>
                <Menu  style={{width:'100%',float:'left',borderBottom:'none', fontSize:"18px",fontWeight:'bold', color:'white', backgroundColor:'#00ac8c'}} mode='horizontal'>
                    <Menu.Item>Kimbocorp</Menu.Item>
                    <Menu.Item>
                    <Search className={style.searchBox} placeholder="search" allowClear size='middle' suffix={suffix} />

                    </Menu.Item>
                    <Menu.Item key="1">Company</Menu.Item>
                    <Menu.Item key="2">Projects</Menu.Item>
                    <Menu.Item key="3"><div ><span className={style.opportunity}>Post of opportunity</span></div></Menu.Item>
                    <Menu.Item key="4"><BiMessage className={style.icon} /></Menu.Item>
                    <Menu.Item key="5" ><VscBell className={style.icon} /></Menu.Item>
                    <Menu.Item key="6" ><div className={style.logoCircle}></div></Menu.Item>
                </Menu>
             </Header>
             <Row justify='center' style={{backgroundColor:'white'}}>
               <Col xl={20} lg={20}>
                  <Content style={{marginTop:'100px'}}>
                    <DashboardHeader/>
                  </Content>
               </Col>
             </Row>
        </Layout>
    )
}

export default MainHeader;