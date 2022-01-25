import React, {useState} from 'react';
import Sflag from './images/singapore_flag.png'
import { MdOutlineCreditCard } from 'react-icons/md'
import style from './CheckOutPlans.module.less'
import {InfoCircleOutlined, MailOutlined } from '@ant-design/icons';
import { Col, Row, Input, Button ,Menu, Tooltip, Select} from 'antd';


const { Option } = Select;
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
              <Col xl={12} lg={12} md={22} sm={22} xs={24}>
               
                    <Row justify='center' style={{fontSize:'22px', fontWeight:'bold'}}>Exempt</Row>
                    <Row justify='center'>
                        <Col span={16} style={{textAlign:'center'}}>
                            <span style={{fontSize:'18px', color:'rgb(32, 30, 30)'}}>Execute your business plan and receive revenues into a digital bank acount</span>
                        </Col>
                    </Row>
                    <div className={activecls ? style.active : ''}>
                      <Row justify='space-around'>
                          <Col xl={8} lg={8} md={22} sm={22} xs={24} style={{textAlign:'center',  fontSize:'26px', marginTop:'30px'}}>
                              <p style={{lineHeight:'0',fontWeight:'bold'}}>USD 329</p>
                              <p style={{lineHeight:'0.5'}}>Per month</p>
                          </Col>
                      </Row>
                    </div>
                    <div className={activecls ? '' : style.active}>
                      <Row justify='space-around'>
                          <Col xl={8} lg={8} md={22} sm={22} xs={24}style={{textAlign:'center',  fontSize:'26px', marginTop:'30px'}}>
                              <p style={{lineHeight:'0',fontWeight:'bold'}}>USD 3290</p>
                              <p style={{lineHeight:'0.5'}}>Per year</p>
                          </Col>
                      </Row>
                    </div>
                        <Row>
                            <Col xl={11} lg={11} md={11} sm={11} xs={24}>
                                <ul style={{fontSize:'13px'}}>
                                    <li>Mandatory corporate secretary and nominee director appointments.</li>
                                    <li>Resolutions to cover change of financial year, registered address, business activities</li>
                                    <li>Hassle-free compliance, including AR and AGM</li>
                                    <li>All business incorporation certificates and constitutions</li>
                                </ul>
                            </Col>
                            <Col xl={11} lg={11} md={11} sm={11} xs={24}>
                                <ul>
                                    <li>Everthing in Dormant </li>
                                    <li style={{color:'#7f0419'}}>Bank Account (WISE or ASPIRE)</li>
                                    <li>30-min strategy sessions every other week</li>
                                    <li>Dedicated dashboard to post queries and wishlists where we will respond within 24hrs</li>
                                </ul>
                            </Col>
                        </Row>
                
              </Col>
              <Col xl={12} lg={12} md={22} sm={22} xs={24}>
                  <Row justify='center' >
                      <Col span={20}>
                        <Row style={{fontSize:'18px'}}>Pay with card</Row>
                        <Row style={{marginTop:"20px", display:'flex', flexDirection:'column'}}>
                          <small>Contact information</small>
                          <div className={style.inputBox}>
                            <Input type='email' placeholder='email@example.com' bordered={false} prefix={<MailOutlined />} />
                            <hr/>
                            <Input placeholder="1234567890" bordered={false} prefix={<img style={{width:'25px'}} src={Sflag}></img>} suffix={<Tooltip placement="topRight" title='Enter Mobile No.'>
                                  <InfoCircleOutlined/>
                                  </Tooltip>} />
                          </div>
                        </Row>

                        <Row style={{marginTop:"20px", display:'flex', flexDirection:'column'}}>
                          <small>Card information</small>
                          <div className={style.inputBox} >
                            <div style={{display:'flex'}}>
                            <Input placeholder='1234 1234 1234 1234' bordered={false} />
                            <img src='https://img.icons8.com/color/36/000000/visa.png'></img>
                            <img src='https://img.icons8.com/color/36/000000/mastercard.png'></img>
                            </div>
                            <hr/>
                              <div style={{display:'flex'}}>
                                  <Input placeholder='MM/YYYY' bordered={false} style={{borderRight:'1px solid gray'}}/>
                                 <Input placeholder="CVC" suffix={<MdOutlineCreditCard/>} bordered={false}/>
                              </div>
                          </div>
                        </Row>

                        <Row style={{marginTop:"20px", display:'flex', flexDirection:'column'}}>
                          <small>Name on card</small>
                          <div className={style.inputBox}>
                            <Input type='text' bordered={false} />
                          </div>
                        </Row>

                        <Row style={{marginTop:"20px", display:'flex', flexDirection:'column'}}>
                          <small>Billing address</small>
                          <div className={style.inputBox}>
                            <Select defaultValue="Singapore" bordered={false} style={{width:'100%'}}>
                              <Option value="India">India</Option>
                              <Option value="USA">USA</Option>
                              <Option value="Japan">Japan</Option>
                            </Select>
                            <hr/>
                            <Input placeholder="Address" bordered={false} />
                          </div>
                          <small><u>Enter address manually</u></small>
                        </Row>

                        <Row style={{marginTop:"20px", display:'flex', flexDirection:'column'}}>
                          <div className={style.inputBox} style={{display:'flex'}}>
                            <Input type='checkbox' id='checkbox' bordered={false} style={{width:'40px', marginTop:'5px'}}/>
                            <div>
                            <label htmlFor='checkbox'>Save my info for secure 1-click checkout</label>
                            <p style={{color:'#b4b4b4'}}>Pay faster on Kimbo Corporate Pte Ltd and thousands of sites.</p>
                            </div>
                          </div>
                        </Row>

                        <Button type='primary' style={{width:'100%', backgroundColor:'#7f0419', margin:'10px 0px', borderRadius:'5px'}}>subscribe</Button>

                      </Col>
                  </Row>
              </Col>
            </Row>
          </Col>
      </Row>
      </>
  );
};

export default CheckOutPlans;
