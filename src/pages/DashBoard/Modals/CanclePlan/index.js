import React from 'react';
import style from './CanclePlan.module.less'
import { Col, Row, Input, Button} from 'antd';

const CanclePlan = () => {
  return (
      <>
        <Row justify='center'>
            <Col span={22}>
                <Row justify='center' style={{fontSize:'20px', fontWeight:'bold'}}>
                    Cancel subscription plan
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col span={24}>
                        <label style={{fontSize:'22px', fontWeight:'bold'}} for='plan'>Current plan</label>
                    </Col>
                    <Col span={24}>
                        <Input className={style.input} name="plan" bordered={false} value='Free' disabled/> 
                    </Col>
                </Row>
                <Row justify='center' style={{marginTop:'50px', fontSize:'20px'}}>
                    <Col span={24} style={{ fontWeight:'bold' }}>
                    What will happen next?
                    </Col>
                    <Col span={22}>
                        <p>1. We will contact you directly
                            to confirm the cancelation.</p>
                            <p>2. Refer to our terms of
                            cancelation.</p>
                    </Col>
                </Row>
                <Row style={{display:'flex', justifyContent:'space-between', fontSize:'18px'}}>
                    <a>Contact us</a>
                    <Button type='primary' style={{backgroundColor:'#7f0419',height:'80%',fontSize:'18px', fontWeight:'bold'}}>Apply to cancle</Button>
                </Row>
            </Col>
        </Row>
      </>
  );
};

export default CanclePlan;
