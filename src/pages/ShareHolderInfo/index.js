import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Row, Col, Button, Form, Input } from 'antd';
import style from './ShareHolderInfo.module.less'
import FrontHeader from '../../components/FrontHeader';

const ShareHolderInfo = () => {
    const navigate = useNavigate();
const [shareHolderInfo, setShareHolderInfo] = useState({
    FirstName:'',
    LastName:'',
    Email:'',
    MobileNumber:'',

})
console.log(shareHolderInfo)
    const onHandleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setShareHolderInfo({...shareHolderInfo, [name]:value});
    }

    return (
        <>
            <FrontHeader/>
            <div className={style.container}>
                <Row justify='center'>
                    <Col span={20}>
                        <Row className={style.first_heading}>Information about other shareholder</Row>
                            <Form>
                                <Row style={{marginBottom:'50px', display:'flex', justifyContent: 'start'}}>
                                    <Col  lg={12} xl={12} md={24} sm={24}>
                                        <Form.Item
                                                name="FirstName"
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'First Name is required',
                                                },
                                                ]}> 
                                                <Input name="FirstName" bordered={false}  className={style.input} 
                                                placeholder="First Name" onChange={onHandleChange}/>
                                         </Form.Item>
                                    </Col>
                                    <Col lg={12}  xl={12} md={24} sm={24}  >
                                        <Form.Item 
                                                 name='LastName' 
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Last Name is required',
                                                    }
                                                ]}> 
                                                <Input name='LastName' bordered={false} className={style.input} 
                                                placeholder="Last Name" onChange={onHandleChange}/>
                                         </Form.Item>
                                    </Col>
                                </Row>
                                <Row style={{marginBottom:'50px'}}>
                                    <Col  lg={12} xl={12} md={24} sm={24}>
                                        <Form.Item
                                                name='Email'
                                                
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'Email is required',
                                                },
                                                ]}> 
                                                <Input name='Email' bordered={false} className={style.input}
                                                 placeholder="Email address" onChange={onHandleChange}/>
                                                <Button className={style.btn} style={{marginLeft:'10px'}}>
                                                Check
                                                </Button>
                                         </Form.Item>
                                         
                                    </Col>
                                    <Col lg={12} xl={12} md={24} sm={24}  >
                                        <Form.Item 
                                                name='MobileNumber'
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Mobile Number is required',
                                                    }
                                                ]}> 
                                                <Input name='MobileNumber' bordered={false} className={style.input}
                                                 placeholder="Mobile Number" onChange={onHandleChange}/>
                                         </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} xl={12} md={12} sm={24} >
                                          <Button className={style.btn} onClick={()=> navigate(-1)}>
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
