import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Finance } from './getFinanceDataSlice'
import style from './Payments.module.less'
import { BiMessageDetail } from 'react-icons/bi';
import { Col, Row, Card, Button, Table, Modal} from 'antd';
import PaymentPlan from '../Modals/PaymentPlans';
import CanclePlan from '../Modals/CanclePlan';

const FinanceColumns = [
    {
      title: 'Issued share capital',
      dataIndex: 'IssuedShare',
    },
    {
      title: 'Paid-up capital',
      dataIndex: 'PaidCapital',
    },
    {
      title: 'Number of shares',
      dataIndex: 'Shares',
    },
  ];
  // const FinanceData = [
  //   {
  //     key: '1',
  //     IssuedShare : 'USD 0',
  //     PaidCapital: 'USD 0',
  //     Shares: 'USD 0',
  //   }
  // ];

const Payments = () => {


  const dispatch = useDispatch();
  const {FinanceData} = useSelector((state)=> state.FinanceData);
        useEffect(() => {
            dispatch(Finance());
        }, [])

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ModalVisible, setModalVisible] = useState(false);
    const [modal, setModal] = useState();
      const showModal = () => {
        setIsModalVisible(true);
        setModal(<PaymentPlan/>)
      };
      const handleOk = () => {
        setIsModalVisible(false);
        setModalVisible(false);
      };
  
      const handleCancel = () => {
        setIsModalVisible(false);
        setModalVisible(false);
      };
      const canclePlan =()=>{
        setModalVisible(true);
        setModal(<CanclePlan/>)
      }
  return (
      <>
        <Modal width="90%" centered={true} visible={isModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel}>
                      {modal}
        </Modal>
        <Modal visible={ModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel}>
                      {modal}
        </Modal>
        <Row justify='space-around' style={{backgroundColor:'#f7f7f7'}}>
            
            <Col xl={15} lg={15} md={15} sm={22} xs={22}>
                <Card title="Test Business" className={style.Card} extra={<Button size='small'>Free</Button>} >
                    <h4 className={style.tableHead}>Company Finance</h4>
                    <Table bordered={false}  pagination={false} columns={FinanceColumns} dataSource={FinanceData} size="small" />
                </Card>

                <Card title="Current Subscription" className={style.Card} extra={<Button size='small' onClick={showModal}>Upgrade</Button>} >
                   <p>Your company is currently on the free plan. Convert your company into a legally registered entity in Singapore by upgrading to company plans.</p>
                </Card>

                <Card title="Manage Subscription" className={style.Card} extra={<Button size='small' onClick={canclePlan}>Add to cancle</Button>} >
                   <p>Apply to cancle your subscription.</p>
                </Card>
            </Col>
            <Col xl={7} lg={7} md={7} sm={22} xs={22}>
                <Card className={style.Card} >
                  <Row>
                      <Col span={6}>
                          <span style={{fontSize:'30px', fontWeight:'bold'}}>K</span>
                          <span style={{fontSize:'30px', fontWeight:'bold', color:'#396e9b'}}>C</span>
                      </Col>
                      <Col span={18}>
                          <small>Kimbocorp</small> <br/>
                          <Button type='primary' style={{backgroundColor:'#38a951', borderRadius:'5px'}}>
                              <BiMessageDetail style={{marginRight:'4px', position:'relative', top:'3px'}}/> Chat</Button>
                      </Col>
                  </Row>
                </Card>

                <Card className={style.Card} >
                   <Row justify='center'>
                       <p style={{fontWeight:'bold'}}>Post a project</p>
                   </Row>
                   <Row>
                       <Col style={{display:'flex', flexDirection:'column'}}>
                        <span >1.Get work done by posting a project</span>
                        <span >2. Receive offers from professionals</span>
                        <span >3. Negotiate the offer (cash or kind)</span>
                        <span >4. Approval the work done</span>
                        <span >5. Release the payment</span>
                       </Col>
                   </Row>
                   <Row justify='center' style={{marginTop:'10px'}}>
                       <Button type='primary'>Post a project</Button>
                   </Row>
                </Card>

                <Card className={style.Card} style={{marginBottom:'10px'}}>
                   <Row justify='center'>
                       <p style={{fontWeight:'bold'}}>Add a company director</p>
                   </Row>
                   <Row>
                       <Col style={{display:'flex', flexDirection:'column'}}>
                        <span>
                        Every business registered in Singapore
                        must have at least one director who is a
                        Singaporean or Singaporean Permanent Resident.
                        </span>
                       </Col>
                   </Row>
                   <Row justify='center' style={{marginTop:'10px'}}>
                       <Button type='primary'>Add a director</Button>
                   </Row>
                </Card>
            </Col>
        </Row>
      </>
  );
};

export default Payments;
