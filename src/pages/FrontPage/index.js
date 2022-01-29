import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getDataAsync} from './FrontPageSlice'
import { Link } from 'react-router-dom';
import style from '../FrontPage/FrontPage.module.less'
import { Layout,  Row, Col, Button } from 'antd';
import FrontHeader from '../../components/FrontHeader';

const {Content } = Layout;

const FrontPage = () => {
        const {userData, loading} = useSelector((state)=> state.userData);
        
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getDataAsync());
        }, [])
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
                           
                                    {userData.map((user) => (

                                        <Row className={style.userBox}>
                                            <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                                                <div className={style.name}><p >{user.Name}</p> </div>
                                                <div> <small>kimbocorp.com/{user.Name}</small> </div>
                                            </Col>
                                            <Col xl={8} lg={8} md={24} sm={24} xs={24} className={style.members}>
                                                <small >{user.Member}</small> 
                                            </Col>
                                            <Col xl={8} lg={8} md={24} sm={24} xs={24} className={style.btn}>
                                                <div ><Button >Launch</Button> </div>
                                            </Col>
                                        </Row>

                                    ))}
                            
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
