import React from 'react'
import { Link } from 'react-router-dom';
import {Row, Col, Image} from 'antd';
import style from './ShareHolders.module.less'
import Cros from '../ExistBusinessInfo/Images/Cros.png'
import Right from '../ExistBusinessInfo/Images/Right.png'
import FrontHeader from '../../components/FrontHeader'

const ShareHolders = () => {
    return (
        <>
            <FrontHeader/>
            <div className={style.container}>
                <Row>
                    <Col span={20} offset={2}>
                        <Row className={style.first_heading}>Do you have other shareholders in this business?</Row>
                        <Row justify='center'>
                            <Col xl={12} md={12} sm={24}>
                                <Row className={style.containBox} justify='center'>
                                    <Col xl={18} lg={18} md={20} sm={24} xs={24}>
                                        <div>
                                            <div><Link to="/shareholderinfo"><Image src={Right} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></Link></div>
                                            
                                        </div>
                                    </Col>
                                    <Col  xl={16} lg={16} md={20} sm={24} xs={24}>
                                        <h1 className={style.font} >Yes, there are other shareholders in this business.</h1>
                                    </Col>
                                </Row>
                                
                            </Col>
                            <Col xl={12} md={12} sm={24}>
                                <Row className={style.containBox} justify='center'>
                                    <Col  xl={18} lg={18} md={20} sm={24} xs={24} >  
                                    
                                        <div>
                                            <div><Image src={Cros} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></div>
                                            
                                        </div>
                                    </Col>
                                    <Col  xl={16} lg={16} md={20} sm={24} xs={24}>
                                        <h1 className={style.font} >No, I am the only shareholder in this business.</h1>
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

export default ShareHolders;
