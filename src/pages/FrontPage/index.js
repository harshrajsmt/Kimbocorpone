import React from 'react'
import { Link } from 'react-router-dom';
import style from '../FrontPage/FrontPage.module.less'
import { Layout,  Row, Col, Button } from 'antd';
import FrontHeader from '../../components/FrontHeader';

const {Content } = Layout;

const FrontPage = () => {
    return (
        <>
            <Layout>
                <FrontHeader/>
                <Content style={{ padding: '0 50px' }}>
                  <div style={{minHeight:window.innerHeight-65}}>
                    <Row justify='center'>
                        <Col xl={10} md={10} sm={24} xs={24}> 
                            <div><h1 className={style.head}>We found something</h1></div>
                            <div>
                                <p className={style.peragraph}>You're already a member of:</p>
                            </div>
                            <div>
                                <Row className={style.userBox}>
                                    <Col xl={8} xs={20} lg={8} md={20} sm={20}>
                                        <div className={style.name}><p>Pony</p></div>
                                        <div><small>kimbocorp.com/pony</small></div>
                                    </Col>
                                    <Col xl={8} xs={20} lg={8} md={20} sm={20}>
                                        <div className={style.members}><small>One member</small></div>
                                    </Col>
                                    <Col xl={8} xs={20} lg={8} md={20} sm={20}>
                                       <div className={style.btn}> <Button>Launch</Button></div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className={style.userBox}>
                                    <Col xl={8} xs={20} lg={8} md={20} sm={20}>
                                        <div className={style.name}><p>indigo</p></div>
                                        <div><small>kimbocorp.com/indigo</small></div>
                                    </Col>
                                    <Col xl={8} xs={20} lg={8} md={20} sm={20}>
                                        <div className={style.members}><small>One member</small></div>
                                    </Col>
                                    <Col xl={8} xs={20} lg={8} md={20} sm={20} >
                                       <div className={style.btn}> <Button>Launch</Button></div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className={style.userBox}>
                                    <Col xl={8} xs={20} lg={8} md={20} sm={20}>
                                        <div className={style.name}><p>hooligan</p></div>
                                        <div><small>kimbocorp.com/hooligan</small></div>
                                    </Col>
                                    <Col xl={8} xs={20} lg={8} md={20} sm={20}>
                                        <div className={style.members}><small>One member</small></div>
                                    </Col>
                                    <Col xl={8} xs={20} lg={8} md={20} sm={20} >
                                       <div className={style.btn}> <Button>Launch</Button></div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className={style.userBox}>
                                    <Col xl={8} xs={20} lg={8} md={20} sm={20}>
                                        <div className={style.name}><p>InProved</p></div>
                                        <div><small>kimbocorp.com/inproved</small></div>
                                    </Col>
                                    <Col xl={8} xs={20} lg={8} md={20} sm={20}>
                                        <div className={style.members}><small>One member</small></div>
                                    </Col>
                                    <Col xl={8} xs={20} lg={8} md={20} sm={20}>
                                       <div className={style.btn}> <Button>Launch</Button></div>
                                    </Col>
                                </Row>
                            </div>
                            <div style={{textAlign:'center', marginTop:'45px'}}>
                                <Row>
                                    <Col span={24}>
                                        <p>Want to create a new company account? 
                                            <Link to='/stepform' style={{color: '#4ba1de', marginLeft: '5px'}}>Start here</Link></p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                  </div>
                </Content>
                
            </Layout>
        </>
    )
}

export default FrontPage;
