import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import { updateAddressAsync } from './ChangeAddressSlice';
import style from './ChangeAddress.module.less'
import { Row, Col, Button, Form, Input, Select} from 'antd';
const { Option } = Select;
const ChangeAddress = () => {

    const dispatch = useDispatch();
    const [address, setAddress] = useState({
        firstLine: '',
        secondLine: '',
        country: '',
        postCode: '',
    })
    const newAddress = {
        id : 22,
        Add:  address.firstLine + " " + address.secondLine + " " + address.country + " " + address.postCode
    }
    console.log(newAddress);
    const changeHandler = (e)=>{
        const { name, value } = e.target;
        setAddress({ ...address, [name]: value})
    }
   
    const updateAddress = () => {
        dispatch(updateAddressAsync(newAddress));
      };
  return (
      <>
      <h2 style={{fontWeight:'bold'}}>Change registered address</h2>
      <h2>Current registered address</h2>
      <Row>
            <Input  bordered={false} className={style.input} value='151 Chin Swee Road Manhattan house' disabled />
      </Row>
      <Row>
            <Input bordered={false} className={style.input} value='02-24 Singapore 169876' disabled />
      </Row>
      <h2 style={{marginTop:'30px'}}>New registered address</h2>
      <Form>
          <Row>
              <Form.Item>
                <Input name='firstLine' bordered={false} className={style.input}  placeholder='Address line 1' onChange={changeHandler}/>
                <Input name='secondLine' bordered={false} className={style.input}  placeholder='Address line 2' onChange={changeHandler}/>
              </Form.Item>
          </Row>
          <Row>
            
                <Col lg={12} xl={12} md={22} sm={22}>
                <Form.Item>
                    <Select name='country' bordered={false} className={style.select} placeholder='Country' onChange={(value)=>setAddress(prev=>({...prev, country : value}))} >
                        <Option value="Singapore">Singapore</Option>
                        <Option value="USA">USA</Option>
                        <Option value="INDIA">INDIA</Option>
                    </Select>
                </Form.Item>
                </Col>
            
            
                <Col lg={12} xl={12} md={22} sm={22}>
                <Form.Item>
                    <Input name='postCode' type='number' bordered={false} className={style.input}  placeholder='Post Code' onChange={changeHandler}/>
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
                            <Button className={style.btn} style={{ float: 'right' }} htmlType="submit" onClick={updateAddress}>
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
