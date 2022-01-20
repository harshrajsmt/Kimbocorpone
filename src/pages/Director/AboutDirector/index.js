import React from 'react'
import { Link } from 'react-router-dom';
import {Row, Col, Image} from 'antd';
import style from './AboutDirector.module.less'
import Right from '../Images/Right.png'
import Right2 from '../Images/Right2.png'

const AboutDirector = () => {
    return (
        <>
            <div className={style.container}>
                <Row justify='center'>
                    <Col span={20}>
                        <Row ><div className={style.first_heading}>Every business in Singapore needs to appoint a resident director.</div></Row>
                        <Row ><div className={style.second_heading}>Are you a foreigner or Singaporean / Singaporean Permanent Resident?</div></Row>
                        <Row justify='center'>
                            <Col lg={12} xl={12} md={12} sm={24} >
                                <Row className={style.containBox} justify='center'>
                                    <Col xl={18} lg={18} md={20} sm={24} xs={24}>
                                        <div>
                                            <div><Image src={Right} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></div>
                                            
                                        </div>
                                    </Col>
                                    <Col  xl={18} lg={18} md={20} sm={24} xs={24} >
                                        <h1 className={style.font} >I am a Singaporean/PR</h1>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={12} xl={12} md={12} sm={24} >
                                <Row className={style.containBox} justify='center'>
                                    <Col  xl={18} lg={18} md={20} sm={24} xs={24} >  
                                    
                                        <div>
                                            <div><Link to='/' ><Image src={Right2} preview ={false} style={{ width: '200px', margin: '20px 0px'}}/></Link></div>
                                            
                                        </div>
                                    </Col>
                                    <Col  xl={18} lg={18} md={20} sm={24} xs={24}>
                                        <h1 className={style.font} >I am a foreigner</h1>
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

export default AboutDirector;
