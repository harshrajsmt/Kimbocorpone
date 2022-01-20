import React from 'react'
import { Row, Col, Button, Form, Input, Select} from 'antd';
import style from './PaidUpCapital.module.less'
const { Option } = Select;
const PaidUpCapital = () => {
    return (
        <>

            <h2>Amend paid-up capital</h2>
            <Form>
            <h2>Current paid-up capital</h2>
                <Row style={{ marginBottom: '30px', display: 'flex', justifyContent: 'start' }}>
                    
                    <Col lg={12} xl={12} md={24} sm={24}>
                        <Form.Item>
                            <Input bordered={false} className={style.input} placeholder="USD" />
                        </Form.Item>
                    </Col>
                    <Col lg={12} xl={12} md={24} sm={24}  >
                        <Form.Item >
                            <Input bordered={false} className={style.input} placeholder="1000" />
                        </Form.Item>
                    </Col>
                </Row>
                <h2>New paid-up capital</h2>
                <Row style={{ marginBottom: '30px', display: 'flex', justifyContent: 'start' }}>
                    
                    <Col lg={12} xl={12} md={24} sm={24}> 
                        <Form.Item>
                            <Select bordered={false} className={style.select} >
                                <Option value="one">USD</Option>
                                <Option value="two">INR</Option>
                                <Option value="three">YEN</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col lg={12} xl={12} md={24} sm={24}  >
                        <Form.Item >
                            <Input bordered={false} className={style.input}/>
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

export default PaidUpCapital;