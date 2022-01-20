import React from 'react'
import { Row, Col, Button, Form, Input} from 'antd';
import style from './NewShareHolderInfo.module.less'

const NewShareHolderInfo = () => {
    return (
        <>

            <h2>Information about new shareholder</h2>
            <Form>
                <Row style={{ marginBottom: '30px', display: 'flex', justifyContent: 'start' }}>
                    <Col lg={12} xl={12} md={24} sm={24}>
                        <Form.Item
                            name="First Name"

                            rules={[
                                {
                                    required: true,
                                    message: 'First Name is required',
                                },
                            ]}>
                            <Input bordered={false} className={style.input} placeholder="First Name" />
                        </Form.Item>
                    </Col>
                    <Col lg={12} xl={12} md={24} sm={24}  >
                        <Form.Item name="Last Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Last Name is required',
                                }
                            ]}>
                            <Input bordered={false} className={style.input} placeholder="Last Name" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '30px' }}>
                    <Col lg={22} xl={22} md={24} sm={24}>
                        <Form.Item
                            name="Email"

                            rules={[
                                {
                                    required: true,
                                    message: 'Email is required',
                                },
                            ]}>
                            <Input bordered={false} className={style.input} placeholder="Email address" />
                            <Button className={style.btn} style={{ marginLeft: '10px' }}>
                                Check
                            </Button>
                        </Form.Item>

                    </Col>
                </Row>
                <Row>
                    <Col lg={18} xl={18} md={24} sm={24}  >
                        <Form.Item name="Mobile Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Mobile Number is required',
                                }
                            ]}>
                            <Input bordered={false} className={style.input} placeholder="Mobile Number" />
                        </Form.Item>
                    </Col>
                </Row>
                <h2>What will happen next?</h2>
                 <p>1. We will contact you directly to confirm the amendment</p>
                <Row>
                    <Col lg={12} xl={12} md={12} sm={24} style={{fontSize:'18px', paddingTop:'10px'}} >
                        <a href='#'>Contact Us</a>
                    </Col>
                    <Col lg={12} xl={12} md={12} sm={24}>
                        <Button className={style.btn} style={{ float: 'right' }} htmlType="submit">
                            Agree and submit
                        </Button>
                    </Col>
                </Row>
            </Form>
            
        </>
    )
}

export default NewShareHolderInfo;
