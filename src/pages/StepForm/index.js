import React from 'react'
import { Steps, Button, message } from 'antd';
import style from './StepForm.module.less'

import { Row, Col } from 'antd';
import FrontHeader from '../../components/FrontHeader';
import BusinessInfo from '../BusinessInfo';
import OwnerInfo from '../OwnerInfo';
import AboutDirector from '../Director/AboutDirector';
import Address from '../Address';

const { Step } = Steps;

const steps = [
  {
    title: 'Business_information',
    content: <BusinessInfo/>,
  },
  {
    title: 'Shareholders',
    content:<OwnerInfo/>,
  },
  {
    title: 'Directors',
    content: <AboutDirector/>,
  },
  {
    title: 'Address',
    content: <Address/>,
  },
];
const StepForm = () => {
    const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
    return (
        <>
        <FrontHeader/>
        <Row>
            <Col span={20} offset={2} style={{marginTop:'30px'}}>
            <div className={style.stepsBox}>
                <Steps labelPlacement='vertical' current={current}>
                    {steps.map(item => (
                    <Step key={item.title} title={<small>{item.title}</small>}/>
                    ))}
                </Steps>
                <div className={style.stepsContent}>{steps[current].content}</div>
                <div className={style.stepsAction}>
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                    )}
                    {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                    )}
                </div>
            </div>
            </Col>
        </Row>
        </>
    )
}

export default StepForm;
