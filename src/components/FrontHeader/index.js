import React from 'react'
import { Layout, Col } from 'antd';
import style from '../FrontHeader/FrontHeader.module.less'
const { Header } = Layout;
const FrontHeader = () => {
    return (
        <Layout>
            <Header style={{backgroundColor:'#00ac8c', display: 'flex',  alignItems:'center'}}>
                    <Col span={2} offset={22}>
                        <div className={style.logo}></div>
                    </Col>
            </Header>
        </Layout>
    )
}

export default FrontHeader;
