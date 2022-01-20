import React from 'react';
import style from './ChangeAddress.module.less'
import { Row, Col, Button, Form, Input, Select} from 'antd';
const { Option } = Select;
const ChangeAddress = () => {
  return (
      <>
      <h2 style={{fontWeight:'bold'}}>Change registered address</h2>
      <h2>Current registered address</h2>
      <Row>
            <Input bordered={false} className={style.input} value='151 Chin Swee Road Manhattan house' disabled />
      </Row>
      <Row>
            <Input bordered={false} className={style.input} value='02-24 Singapore 169876' disabled />
      </Row>
      <h2 style={{marginTop:'30px'}}>New registered address</h2>
      <Form>
          <Row>
              <Form.Item>
                <Input bordered={false} className={style.input}  placeholder='Address line 1'/>
                <Input bordered={false} className={style.input}  placeholder='Address line 2'/>
              </Form.Item>
          </Row>
          <Row>
            
                <Col lg={12} xl={12} md={22} sm={22}>
                <Form.Item>
                    <Select bordered={false} className={style.select} placeholder='Country' >
                        <Option value="Singapore">Singapore</Option>
                        <Option value="USA">USA</Option>
                        <Option value="INDIA">INDIA</Option>
                    </Select>
                </Form.Item>
                </Col>
            
            
                <Col lg={12} xl={12} md={22} sm={22}>
                <Form.Item>
                    <Input bordered={false} className={style.input}  placeholder='Post Code'/>
                </Form.Item>
                </Col>
          </Row>
          <h2 style={{fontWeight:'bold', marginTop:'20px'}}>What will happen next?</h2>
          <p>1. We will contact you directly to confirm the amendment</p>

          
                <Row style={{marginTop:'10px'}}>
                <Col lg={12} xl={12} md={12} sm={24} style={{fontSize:'18px', paddingTop:'10px'}} >
                        <a href='#'>Contact Us</a>
                </Col>
                    <Col lg={12} xl={12} md={12} sm={24}>
                        <Form.Item>
                            <Button className={style.btn} style={{ float: 'right' }} htmlType="submit">
                                Agree and submit
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            
      </Form>
      
      </>
  );
};

export default ChangeAddress;
