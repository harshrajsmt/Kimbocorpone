import React from 'react';
import style from '../../Details/Details.module.less'
import { AiFillCaretDown, AiFillInfoCircle} from 'react-icons/ai';
import { Col, Row, Button, Select, Form} from 'antd';
const { Option } = Select;
const BusinessActivities = () => {
  return (
      <>
       <h2>Edit business activities</h2>
                        <Form>
                        <Form.Item
                              name="Primary business activity"
                              rules={[{ required: true, message: 'Please input your Activity!' }]}
                            >
                              <Col xl={22} lg={22} md={22} sm={22} xs={22}>
                                <label>Primary business activity<AiFillInfoCircle /></label>
                                <Select bordered={false} className={style.select} suffixIcon={<AiFillCaretDown style={{color:'#000'}}/>}>
                                    <Option value="one">Business Activity one</Option>
                                    <Option value="two">Business Activity two</Option>
                                    <Option value="three">Business Activity three</Option>
                                </Select>
                            </Col>
                        </Form.Item>
                        
                        <Form.Item
                              name="Secondary business activity"
                              rules={[{ required: true, message: 'Please input your Activity!' }]}
                            >
                              <Col xl={22} lg={22} md={22} sm={22} xs={22}>
                                <label>Secondary business activity<AiFillInfoCircle/></label>
                                <Select bordered={false} className={style.select} suffixIcon={<AiFillCaretDown style={{color:'#000'}}/>}>
                                    <Option value="one">Business Activity one</Option>
                                    <Option value="two">Business Activity two</Option>
                                    <Option value="three">Business Activity three</Option>
                                </Select>
                            </Col>
                        </Form.Item>
                        <h2>What will happen next?</h2>
                        <p>1. We will contact you directly to confirm the amendment</p>
                        
                          <Form.Item>
                          <Row style={{marginTop:'50px'}}>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                              <a href='#'>Contcat Us</a>
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                              <Button type='primary' htmlType="submit" style={{backgroundColor:'#7f0419'}}>Agree and submit</Button>
                            </Col>
                          </Row>
                          </Form.Item>
                        
                        </Form>
      </>
  );
};

export default BusinessActivities;
