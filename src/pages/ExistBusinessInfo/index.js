import React from 'react'
import { Link } from 'react-router-dom';
import {Row, Col, Image} from 'antd';
import style from './ExistBusinessInfo.module.less'
import Cros from './Images/Cros.png'
import Right from './Images/Right.png'
import FrontHeader from '../../components/FrontHeader'

const ExistBusinessInfo = () => {
    return (
        <>
            <FrontHeader/>
            <div className={style.container}>
                <Row justify='center'>
                    <Col span={20}>
                        <Row className={style.first_heading}>About your existing business</Row>
                        <Row ><h1>Is your business incorporated in Singapore?</h1></Row>
                        <Row>
                            <Col xl={12} md={12} sm={24}>
                                <Row className={style.containBox}>
                                    <Col span={18}>
                                        <div>
                                            <div><Link to='/existingbusiness'><Image src={Right} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></Link> </div>
                                            
                                        </div>
                                    </Col>
                                    <Col span={16}>
                                        <h1 className={style.font} >Yes, it is incorporated in Singapore</h1>
                                    </Col>
                                </Row>
                               
                            </Col>
                            <Col xl={12} md={12} sm={24}>
                                <Row className={style.containBox}>
                                    <Col span={18} >  
                                    
                                        <div>
                                            <div><Image src={Cros} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></div>
                                            
                                        </div>
                                    </Col>
                                    <Col span={16}>
                                        <h1 className={style.font} >No, it is not incorporated in Singapore</h1>
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

export default ExistBusinessInfo;
