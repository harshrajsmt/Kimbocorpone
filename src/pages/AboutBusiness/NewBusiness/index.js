import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {businessActivity} from './getNewBusinessSlice'
import { Link } from 'react-router-dom';
import {Row, Col, Button, Form, Input, Select , Tooltip} from 'antd';
import style from './NewBusiness.module.less'
import FrontHeader from '../../../components/FrontHeader';
import { CaretDownOutlined, InfoCircleFilled } from '@ant-design/icons';

const { Option } = Select;
const message = 'It seems like it is available in Singapore, or Please enter another name, it seems like it is not available in Singapore'

const NewBusiness = () => {

    const {selectActivity, loading} = useSelector((state)=> state.selectActivity);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(businessActivity());
    }, [])

    const [businessInfo, setBusinessInfo] = useState({
        CompanyName:'',
        CompanyActivity: '',
    })
    console.log('businessIfo', businessInfo)
    const onHandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setBusinessInfo({...businessInfo, [name]:value});
            
        }
    return (
        <>
            <FrontHeader/>
            <div className={style.container}>
                <Row>
                    <Col span={20} offset={2}>
                        <Row className={style.first_heading}>About your new business</Row>
                            <Form>
                                <Row style={{marginBottom:'50px'}}>
                                    <Col span={14} >
                                        <Form.Item
                                                name="CompanyName"
                                                
                                                rules={[
                                                {
                                                    required: true,
                                                    message: {message},
                                                },
                                                ]}> 
                                                <Input name="CompanyName" bordered={false} className={style.input} placeholder="Company name - first choice" onChange={onHandleChange}/>
                                         </Form.Item>
                                    </Col>
                                    <Col lg={8} xl={8} md={24} sm={24}>
                                            <Form.Item style={{paddingLeft:'25px'}}>
                                                <Button className={style.btn} htmlType="submit">
                                                    Check
                                                </Button>
                                            </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{marginBottom:'50px'}}>
                                    <Col span={16}>
                                        <Form.Item>
                                            <Select bordered={false} className={style.input} 
                                                style={{paddingBottom:'10px'}}
                                                name = "CompanyActivity"
                                                defaultValue="SSIC - Company activity" 
                                                suffixIcon= {<CaretDownOutlined className={style.icon} onChange={onHandleChange}/>}>
                                                    {selectActivity.map((activity)=>(
                                                        <Option value={activity.value} key={activity.id}>{activity.value}</Option>
                                                    ))}
                                            </Select>
                                        </Form.Item> 
                                    </Col>
                                    <Col>
                                        <Tooltip placement="topLeft" title='Company activitys'>
                                            <InfoCircleFilled style={{fontSize:'24px', marginLeft:'10px', paddingBottom:'10px'}}/>
                                        </Tooltip> 
                                    </Col>
                                </Row>
                                <Row>
                                    <Col  lg={12} xl={12} md={12} sm={24}>
                                           <Link to='/stepform'>
                                               <Button className={style.btn} >
                                                Back
                                                </Button> 
                                            </Link>
                                    </Col>
                                    <Col  lg={12} xl={12} md={12} sm={24}>
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

export default NewBusiness;
