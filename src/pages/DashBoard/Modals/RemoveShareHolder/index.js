import React from 'react'
import { Row, Col, Button, Form, Input} from 'antd';
import style from './RemoveShareHolder.module.less'

const RemoveShareHolder = () => {
    return (
        <>

            <h2>Are you sure you want to remove this shareholder?</h2>
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
                <h2>What will happen next?</h2>
                 <p>1. We will contact you directly to confirm the removal</p>
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

export default RemoveShareHolder;