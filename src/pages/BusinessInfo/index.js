import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'antd';
import style from './BusinessInfo.module.less'
import Book from './Images/Book.png'
import Bulb from './Images/Bulb.png'
const BusinessInfo = () => {
    return (
        <>
        <div>
            <Row>
                <Col span={24} >
                    <h1 className={style.bold}>Let us help you put the business together.</h1> 
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <h1 style={{fontWeight: '400'}}>Firstly is this an existing business?</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={12} sm={24}> 
                   <Row justify='center'>
                       <Col  xl={14} lg={14} md={18} sm={24} xs={24} >
                        <div>
                            <div><Link to='/existbusinessinfo'><Image src={Book} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></Link></div>
                            <div>
                                <h1 className={style.font} >This is an existing business already incorporated elsewhere</h1>
                            </div>
                        </div>
                       </Col>
                   </Row>
                    
                </Col>
                <Col  lg={12} sm={24}>
                    <Row justify='center'>
                       <Col xl={14} lg={14} md={18} sm={24} xs={24}>
                        <div>
                            <div><Link to='/newbusiness'><Image src={Bulb} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/> </Link></div>
                            <div>
                                <h1 className={style.font} >This is a new business that is not yet incorporated anywhere</h1>
                            </div>
                        </div>
                       </Col>
                   </Row>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default BusinessInfo;
