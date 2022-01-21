import React from 'react';
import style from './PaymentPlans.module.less'
import { Col, Row, Input} from 'antd';

const PaymentPlan = () => {
  return (
      <>
        <Row>
            <Col>
                 <label style={{fontSize:'22px', fontWeight:'bold'}} for='plan'>Current plan</label>
            </Col>
            <Col>
                <Input className={style.input} name="plan" bordered={false} value='Free' disabled/> 
            </Col>
        </Row>
        <Row justify='space-around' style={{marginTop:'30px'}}>
            <Col xl={10} lg={10} md={10} sm={22} xs={22}>
                <div className={style.planbox}>
                    <Row justify='center' style={{fontSize:'22px', fontWeight:'bold'}}>Dormat</Row>
                    <Row justify='center'>
                        <Col span={16}>
                            <span style={{fontSize:'18px', color:'rgb(32, 30, 30)'}}>Remove all the barriers to entry in a new market with this basic plan</span>
                        </Col>
                    </Row>
                    <Row justify='space-around'>
                        <Col span={8} style={{textAlign:'center',  fontSize:'26px', marginTop:'20px'}}>
                            <p style={{lineHeight:'0',fontWeight:'bold'}}>USD 129</p>
                            <p style={{lineHeight:'0.5'}}>Per month</p>
                        </Col>
                        <Col span={8} style={{textAlign:'center',  fontSize:'26px', marginTop:'20px'}}>
                            <p style={{lineHeight:'0',fontWeight:'bold'}}>USD 1290</p>
                            <p style={{lineHeight:'0.5'}}>Per year</p>
                            <p style={{lineHeight:'0.5'}}>(Save 20%)</p>
                        </Col>
                    </Row>

                    <Row justify='center'>
                        <Col span={18}>
                            <ul style={{fontSize:'16px'}}>
                                <li>Mandatory corporate secretary and nominee director appointments.</li>
                                <li>Resolutions to cover change of financial year, registered address, business activities</li>
                                <li>Hassle-free compliance, including AR and AGM</li>
                                <li>All business incorporation certificates and constitutions</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col xl={10} lg={10} md={10} sm={22} xs={22}>
                <div className={style.planbox}>
                    <Row justify='center' style={{fontSize:'22px', fontWeight:'bold'}}>Exempt</Row>
                    <Row justify='center'>
                        <Col span={16}>
                            <span style={{fontSize:'18px', color:'rgb(32, 30, 30)'}}>Execute your business plan and receive revenues into a digital bank acount</span>
                        </Col>
                    </Row>
                    <Row justify='space-around'>
                        <Col span={8} style={{textAlign:'center',  fontSize:'26px', marginTop:'20px'}}>
                            <p style={{lineHeight:'0',fontWeight:'bold'}}>USD 329</p>
                            <p style={{lineHeight:'0.5'}}>Per month</p>
                        </Col>
                        <Col span={8} style={{textAlign:'center',  fontSize:'26px', marginTop:'20px'}}>
                            <p style={{lineHeight:'0',fontWeight:'bold'}}>USD 3290</p>
                            <p style={{lineHeight:'0.5'}}>Per year</p>
                            <p style={{lineHeight:'0.5'}}>(Save 20%)</p>
                        </Col>
                    </Row>
                        <Row>
                            <Col span={11}>
                                <ul style={{fontSize:'13px'}}>
                                    <li>Mandatory corporate secretary and nominee director appointments.</li>
                                    <li>Resolutions to cover change of financial year, registered address, business activities</li>
                                    <li>Hassle-free compliance, including AR and AGM</li>
                                    <li>All business incorporation certificates and constitutions</li>
                                </ul>
                            </Col>
                            <Col span={11}>
                                <ul>
                                    <li>Everthing in Dormant </li>
                                    <li style={{color:'#7f0419'}}>Bank Account (WISE or ASPIRE)</li>
                                    <li>30-min strategy sessions every other week</li>
                                    <li>Dedicated dashboard to post queries and wishlists where we will respond within 24hrs</li>
                                </ul>
                            </Col>
                        </Row>
                </div>
            </Col>
        </Row>
      </>
  );
};

export default PaymentPlan;
