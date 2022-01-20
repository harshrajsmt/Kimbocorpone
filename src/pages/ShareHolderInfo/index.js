import React from 'react'
import {Row, Col, Button, Form, Input, Select } from 'antd';
import style from './ShareHolderInfo.module.less'
import FrontHeader from '../../components/FrontHeader';

const { Option } = Select;

const ShareHolderInfo = () => {
    return (
        <>
            <FrontHeader/>
            <div className={style.container}>
                <Row>
                    <Col span={20} offset={2}>
                        <Row className={style.first_heading}>Information about other shareholder</Row>
                            <Form>
                                <Row style={{marginBottom:'50px', display:'flex', justifyContent: 'start'}}>
                                    <Col  lg={12} xl={12} md={24} sm={24}>
                                        <Form.Item
                                                name="First Name"
                                                
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'First Name is required',
                                                },
                                                ]}> 
                                                <Input bordered={false}  className={style.input} placeholder="First Name"/>
                                         </Form.Item>
                                    </Col>
                                    <Col lg={12}  xl={12} md={24} sm={24}  >
                                        <Form.Item name="Last Name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Last Name is required',
                                                    }
                                                ]}> 
                                                <Input bordered={false} className={style.input} placeholder="Last Name"/>
                                         </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{marginBottom:'50px'}}>
                                    <Col  lg={12} xl={12} md={24} sm={24}>
                                        <Form.Item
                                                name="Email"
                                                
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'Email is required',
                                                },
                                                ]}> 
                                                <Input bordered={false} className={style.input} placeholder="Email address"/>
                                                <Button className={style.btn} style={{marginLeft:'10px'}}>
                                                Check
                                                </Button>
                                         </Form.Item>
                                         
                                    </Col>
                                    <Col lg={12} xl={12} md={24} sm={24}  >
                                        <Form.Item name="Mobile Number"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Mobile Number is required',
                                                    }
                                                ]}> 
                                                <Input bordered={false} className={style.input} placeholder="Mobile Number"/>
                                         </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} xl={12} md={12} sm={24} >
                                          <Button className={style.btn}>
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

export default ShareHolderInfo;
