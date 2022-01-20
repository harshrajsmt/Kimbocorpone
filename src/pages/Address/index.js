import React from 'react'
import {Row, Col, Button, Form, Input, Select } from 'antd';
import style from './Address.module.less'


const { Option } = Select;
const message = <span style={{fontSize:'23px'}}>Address is mandatory</span>
const Address = () => {
    return (
        <>
            <div className={style.container}>
                <Row>
                    <Col span={20} offset={2}>
                        <Row className={style.first_heading}>
                            <Col span={20} offset={2}>
                            kimbocorp will utilise our address for your business when
                            incorporated. We will scan your mails, upload them to your
                            account and forward them to your email.</Col>
                        </Row>
                        <Row className={style.second_heading}><Col span={20} offset={2}>
                            You can contact us to change this anytime later</Col> 
                        </Row>
                            <Form>
                                <Row style={{marginBottom:'50px'}}>
                                    <Col span={24} >
                                        <Form.Item
                                                name="Address"
                                                
                                                rules={[
                                                {
                                                    required: true,
                                                    message: {message},
                                                },
                                                ]}> 
                                                <Input bordered={false} className={style.input} placeholder="151 Chin Swee Road Manhattan House 02-24 Singapore 169876"/>
                                         </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col  lg={12} xl={12} md={12} sm={24}>
                                            <Button className={style.btn} style={{float:'left'}}>
                                                Back
                                            </Button>
                                    </Col>
                                    <Col lg={12} xl={12} md={12} sm={24}>
                                            <Button className={style.btn} style={{float:'right'}} htmlType="submit">
                                                Save & Next
                                            </Button>
                                    </Col>
                                </Row>
                            </Form>
                    </Col>
                </Row>
            </div>
             
        </>
    )
}

export default Address;
