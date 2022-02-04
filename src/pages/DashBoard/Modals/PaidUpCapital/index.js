import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCapitalsAsync} from './addPaidUpCapitalSlice'
import { Row, Col, Button, Form, Input, Select} from 'antd';
import style from './PaidUpCapital.module.less'
const { Option } = Select;
const PaidUpCapital = () => {
   const Id = Date.now().toString();
//    const Capitals = useSelector(showCapitals);
   const dispatch = useDispatch();

   const [capitalInfo, setCapitalInfo] = useState({
        id:Id,
        amount : '',
        sharesNo : '',
        Currency : '',
        ShareType : '',
    })

        const changeHandler = (e)=>{
            const { name, value } = e.target;
            setCapitalInfo({...capitalInfo, [name]: value })
        }

    const addNewCapitals = (e) => {
        dispatch(addCapitalsAsync(capitalInfo));
      };

    return (
        <>

            <h2>Amend paid-up capital</h2>
            <Form>
            <h2>Current paid-up capital</h2>
                <Row style={{ marginBottom: '30px', display: 'flex', justifyContent: 'start' }}>
                    
                    <Col lg={12} xl={12} md={24} sm={24}>
                        <Form.Item>
                            <Input name='amount' bordered={false} className={style.input} placeholder="USD" onChange={changeHandler} />
                        </Form.Item>
                    </Col>
                    <Col lg={12} xl={12} md={24} sm={24}  >
                        <Form.Item >
                            <Input name='sharesNo' bordered={false} className={style.input} placeholder="Number of shares" onChange={changeHandler} />
                        </Form.Item>
                    </Col>
                </Row>
                <h2>New paid-up capital</h2>
                <Row style={{ marginBottom: '30px', display: 'flex', justifyContent: 'start' }}>
                    
                    <Col lg={12} xl={12} md={24} sm={24}> 
                        <Form.Item>
                            <Select name='Currency' bordered={false} className={style.select} onChange={(value)=>setCapitalInfo(prev=>({...prev, Currency : value}))}>
                                <Option value="USD">USD</Option>
                                <Option value="INR">INR</Option>
                                <Option value="YEN">YEN</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col lg={12} xl={12} md={24} sm={24}  >
                        <Form.Item >
                            <Input name='ShareType' bordered={false} placeholder='Type of share' className={style.input} onChange={changeHandler}/>
                        </Form.Item>
                    </Col>
                </Row>
                <h2>What will happen next?</h2>
                 <p>1. We will contact you directly to confirm the amendment</p>
                <Row>
                    <Col lg={12} xl={12} md={12} sm={24} style={{fontSize:'18px', paddingTop:'10px'}} >
                        <Link to=''>Contact Us</Link>
                    </Col>
                    <Col lg={12} xl={12} md={12} sm={24}>
                        <Button className={style.btn} style={{ float: 'right' }} htmlType="submit" onClick={addNewCapitals}>
                            Agree and submit
                        </Button>
                    </Col>
                </Row>
            </Form>
            
        </>
    )
}

export default PaidUpCapital;