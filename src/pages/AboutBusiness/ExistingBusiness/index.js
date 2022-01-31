import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {selectOption} from './getExistingBusiness-slice'
import { Link } from 'react-router-dom';
import {Row, Col, Button, Form, Input, Select, Tooltip } from 'antd';
import style from './ExistingBusiness.module.less'
import FrontHeader from '../../../components/FrontHeader';
import { CaretDownOutlined, InfoCircleFilled } from '@ant-design/icons';

const { Option } = Select;

const ExistingBusiness = () => {

    const {selectValue, loading} = useSelector((state)=> state.selectValue);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(selectOption());
    }, [])

    const [companyInfo, setCompanyInfo] = useState({
        UNE : '',
        CompanyName : '',
        CompanyActivity : '',
    })
    const onHandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
            setCompanyInfo({...companyInfo, [name]:value});
            
        }
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
                                                    message: 'UEN is required',
                                                },
                                                ]}> 
                                                <Input name="UNE" bordered={false} className={style.input} placeholder="UNE" value={companyInfo.UNE} onChange={onHandleChange}/>
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
                                        <Form.Item name="CompanyName"
                                                
                                             rules={[
                                             {
                                                 required: true,
                                                 message: 'Company name is required',
                                             },
                                             ]}
                                        > 
                                                <Input name="CompanyName" bordered={false} className={style.input} placeholder="Company name" onChange={onHandleChange}/>
                                         </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{marginBottom:'50px'}}>
                                    <Col span={18}>
                                        <Form.Item
                                            name='CompanyActivity'
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Activity is required',
                                            },
                                            ]}
                                        >
                                            <Select name='CompanyActivity' bordered={false} className={style.input} 
                                                style={{paddingBottom:'10px'}}
                                                placeholder='SSIC - Company activity' 
                                                suffixIcon= {<CaretDownOutlined className={style.icon}
                                                onChange={onHandleChange} />}>
                                                    {selectValue.map((data) => (
                                                        <Option value={data.value} key={data.id}>{data.value}</Option>
                                                    ))}
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
