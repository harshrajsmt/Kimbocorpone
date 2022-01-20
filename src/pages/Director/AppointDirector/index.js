import React from 'react'
import { Link } from 'react-router-dom';
import {Row, Col, Image} from 'antd';
import style from './AppointDirector.module.less'
import Cros from '../Images/Cross.png'
import Right from '../Images/Right.png'
import FrontHeader from '../../../components/FrontHeader'

const AppointDirector = () => {
    return (
        <>
            <FrontHeader/>
            <div className={style.container}>
                <Row justify='center'>
                    <Col span={20}>
                        <Row className={style.first_heading}>Besides yourself, do you have other persons who can be appointed as directors?</Row>
                        <Row>
                            <Col lg={12} xl={12} md={12} sm={24} xs={24}>
                                <Row className={style.containBox} justify='center'>
                                    <Col lg={18} xl={18} md={18} sm={24} xs={24}>
                                        <div>
                                            <div><Link to="/directorinfo"><Image src={Right} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></Link></div>
                                            
                                        </div>
                                    </Col>
                                    <Col lg={16} xl={16} md={16} sm={24} xs={24}>
                                        <h1 className={style.font} >Yes, there are other directors in the business.</h1>
                                    </Col>
                                </Row>
                                
                            </Col>
                            <Col lg={12} xl={12} md={12} sm={24} xs={24}>
                                <Row className={style.containBox} justify='center'>
                                    <Col lg={18} xl={18} md={18} sm={24} xs={24}>  
                                    
                                        <div>
                                            <div><Image src={Cros} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></div>
                                            
                                        </div>
                                    </Col>
                                    <Col lg={16} xl={16} md={16} sm={24} xs={24}>
                                        <h1 className={style.font} >No, I am the only director in this business.</h1>
                                    </Col >
                                </Row>
                               
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
             
        </>
    )
}

export default AppointDirector;
