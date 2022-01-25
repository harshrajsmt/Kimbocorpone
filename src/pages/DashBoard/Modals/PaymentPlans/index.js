import React, {useState} from 'react';
import style from './PaymentPlans.module.less'
import { Col, Row, Input, Button , Modal} from 'antd';
import CheckOutPlans from '../CheckOutPlans';

const PaymentPlan = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
        
      };
      const handleOk = () => {
        setIsModalVisible(false);
       
      };
  
      const handleCancel = () => {
        setIsModalVisible(false);
       
      };

  return (
      <>
        <Modal width="90%" centered={true} visible={isModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel}>
                      <CheckOutPlans/>
        </Modal>
        <Row  justify='center'>
            <Col span={22} >
                <Row>
                <Col xl={4} lg={4} md={4} sm={22} xs={22}>
                    <p style={{fontSize:'22px', fontWeight:'bold'}} for='plan'>Current plan</p>
                </Col>
                <Col xl={8} lg={8} md={8} sm={22} xs={22}>
                    <Input className={style.input} name="plan" bordered={false} value='Free' disabled/> 
                </Col>
                </Row>
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
                        <Col  xl={8} lg={8} md={8} sm={22} xs={22} style={{textAlign:'center',  fontSize:'26px', marginTop:'20px'}}>
                            <p style={{lineHeight:'0',fontWeight:'bold'}}>USD 129</p>
                            <p style={{lineHeight:'0.5'}}>Per month</p>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={22} xs={22} style={{textAlign:'center',  fontSize:'26px', marginTop:'20px'}}>
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
                        <Col xl={8} lg={8} md={8} sm={22} xs={22} style={{textAlign:'center',  fontSize:'26px', marginTop:'20px'}}>
                            <p style={{lineHeight:'0',fontWeight:'bold'}}>USD 329</p>
                            <p style={{lineHeight:'0.5'}}>Per month</p>
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={22} xs={22} style={{textAlign:'center',  fontSize:'26px', marginTop:'20px'}}>
                            <p style={{lineHeight:'0',fontWeight:'bold'}}>USD 3290</p>
                            <p style={{lineHeight:'0.5'}}>Per year</p>
                            <p style={{lineHeight:'0.5'}}>(Save 20%)</p>
                        </Col>
                    </Row>
                        <Row>
                            <Col xl={11} lg={11} md={11} sm={22} xs={22}>
                                <ul style={{fontSize:'13px'}}>
                                    <li>Mandatory corporate secretary and nominee director appointments.</li>
                                    <li>Resolutions to cover change of financial year, registered address, business activities</li>
                                    <li>Hassle-free compliance, including AR and AGM</li>
                                    <li>All business incorporation certificates and constitutions</li>
                                </ul>
                            </Col>
                            <Col xl={11} lg={11} md={11} sm={22} xs={22}>
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
        <Row>
            <Col span={24}>
                <Button type='primary' style={{ float:'right', backgroundColor:'#7f0419', height:'70%',
                 margin:'20px 20px 20px 0px', fontSize:'20px', fontWeight:'bold'}} onClick={showModal} >Checkout</Button>
            </Col>
        </Row>
      </>
  );
};

export default PaymentPlan;
