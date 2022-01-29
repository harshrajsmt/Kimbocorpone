import React from 'react'
import { Link } from 'react-router-dom';
import {Row, Col, Button, Form, Input, Select, Tooltip } from 'antd';
import style from './ExistingBusiness.module.less'
import FrontHeader from '../../../components/FrontHeader';
import { CaretDownOutlined, InfoCircleFilled } from '@ant-design/icons';

const { Option } = Select;
const message = <span style={{fontSize:'23px'}}>UEN is required</span>

const ExistingBusiness = () => {
    return (
        <>
            <FrontHeader/>
            <div className={style.container}>
                <Row justify='center'>
                    <Col span={20}>
                        <Row className={style.first_heading}>Information about your existing Singapore company</Row>
                            <Form>
                                <Row style={{marginBottom:'50px'}}>
                                    <Col  lg={6} xl={7} md={24} sm={24}>
                                        <Form.Item
                                                name="UNE"
                                                
                                                rules={[
                                                {
                                                    required: true,
                                                    message: {message},
                                                },
                                                ]}> 
                                                <Input bordered={false} className={style.input} placeholder="UNE"/>
                                         </Form.Item>
                                    </Col>
                                    <Col  lg={5} xl={4} md={24} sm={24}>
                                            <Form.Item style={{paddingLeft:'25px'}}>
                                              
                                                   <Button className={style.btn}>
                                                        Check
                                                   </Button>
                                            
                                            </Form.Item>
                                    </Col>
                                    <Col lg={6} xl={7} md={24} sm={24}  >
                                        <Form.Item name="CompanyName"> 
                                                <Input bordered={false} className={style.input} placeholder="Company name"/>
                                         </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{marginBottom:'50px'}}>
                                    <Col span={18}>
                                        <Form.Item>
                                            <Select bordered={false} className={style.input} 
                                                style={{paddingBottom:'10px'}}
                                                defaultValue="SSIC - Company activity" 
                                                suffixIcon= {<CaretDownOutlined className={style.icon}/>}>
                                                    <Option value="one">Company activity one</Option>
                                                    <Option value="two">Company activity two</Option>
                                                    <Option value="three">Company activity three</Option>
                                            </Select>
                                        </Form.Item> 
                                    </Col>
                                    <Col>
                                        <Tooltip placement="topLeft" title='Activitys'>
                                            <InfoCircleFilled style={{fontSize:'24px', marginLeft:'10px', paddingBottom:'10px', cursor:'pointer'}}/>
                                        </Tooltip>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} xl={12} md={12} sm={24} >
                                        <Link to="/existbusinessinfo">
                                            <Button className={style.btn}>
                                                Back
                                            </Button>
                                        </Link> 
                                    </Col>
                                    <Col lg={12} xl={12} md={12} sm={24} >
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

export default ExistingBusiness;
