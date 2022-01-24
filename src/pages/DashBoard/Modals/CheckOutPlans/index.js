import React, {useState} from 'react';
import style from './CheckOutPlans.module.less'
import { Col, Row, Input, Button ,Menu} from 'antd';



const CheckOutPlans = () => {
  const [activecls, setActivecls]= useState(false);
  return (
      <>
      <Row justify='center'>
          <Col span={22}>
            <Row>
              <Menu mode='horizontal' style={{width:'100%', marginBottom:'20px', fontSize:'18px', fontWeight:'bold'}}> 
                <Menu.Item key="1" onClick={()=>setActivecls(false)}>Monthly</Menu.Item>
                <Menu.Item key="2" onClick={()=>setActivecls(true)}> Yearly</Menu.Item>
              </Menu>
            </Row>
            <Row>
              <Col xl={12} lg={12} md={22} sm={22} xs={24} style={{border:'1px solid #000'}}>
               
                    <Row justify='center' style={{fontSize:'22px', fontWeight:'bold'}}>Exempt</Row>
                    <Row justify='center'>
                        <Col span={16} style={{textAlign:'center'}}>
                            <span style={{fontSize:'18px', color:'rgb(32, 30, 30)'}}>Execute your business plan and receive revenues into a digital bank acount</span>
                        </Col>
                    </Row>
                    <div className={activecls ? style.active : ''}>
                      <Row justify='space-around'>
                          <Col span={8} style={{textAlign:'center',  fontSize:'26px', marginTop:'30px'}}>
                              <p style={{lineHeight:'0',fontWeight:'bold'}}>USD 329</p>
                              <p style={{lineHeight:'0.5'}}>Per month</p>
                          </Col>
                      </Row>
                    </div>
                    <div className={activecls ? '' : style.active}>
                      <Row justify='space-around'>
                          <Col span={8} style={{textAlign:'center',  fontSize:'26px', marginTop:'30px'}}>
                              <p style={{lineHeight:'0',fontWeight:'bold'}}>USD 3290</p>
                              <p style={{lineHeight:'0.5'}}>Per year</p>
                          </Col>
                      </Row>
                    </div>
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
                
              </Col>
              <Col xl={12} lg={12} md={22} sm={22} xs={24} style={{border:'1px solid #000'}}>
                
              </Col>
            </Row>
          </Col>
      </Row>
      </>
  );
};

export default CheckOutPlans;
