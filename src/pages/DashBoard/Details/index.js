import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ShareHolders } from './getShareHolderSlice';
import { Officers } from './getOfficersSlice';
import { Capitals } from './getCapitalSlice';
import { Activity } from './getBusinessActivitySlice';
import { MdModeEdit, MdLocationPin} from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io'; 
import style from './Details.module.less'
import { Col, Row, Card, Button, Select, Table, Modal} from 'antd';
import NewShareHolderInfo from '../Modals/NewShareHolder';
import BusinessActivities from '../Modals/BusinessActivities';
import RemoveShareHolder from '../Modals/RemoveShareHolder';
import PaidUpCapital from '../Modals/PaidUpCapital';
import ChangeAddress from '../Modals/ChangeAddress';
const { Option } = Select;

const shareHolderColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Ordinary number/ Currency',
    dataIndex: 'Currency',
  },
  {
    title: 'Date Of Appointment',
    dataIndex: 'Appointment',
  },
  {
      title: 'Action',
      dataIndex: 'Action',
    },
];

// const shareHolderData = [
    // {
//       key: '1',
//       name: 'John Brown',
//       Currency: 32,
//       Appointment: '18/01/2022',
      // Action:<div><MdModeEdit style={{marginRight:'10px'}}/> <IoMdTrash /></div>,
    // }
// ];

  const officersColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Nationality / Position held',
      dataIndex: 'Nationality',
    },
    {
      title: 'Date Of Appointment',
      dataIndex: 'Appointment',
    },
    {
        title: 'Action',
        dataIndex: 'Action',
      },
  ];
  // const officersData = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     Nationality: 'Singapore / Director',
  //     Appointment: '18/01/2022',
  //     Action:<div><MdModeEdit style={{marginRight:'10px'}}/> <IoMdTrash/></div>,
  //   }
  // ];

  const ShareCapitalColumns = [
    {
      title: 'Issued share capital amount',
      dataIndex: 'amount',
    },
    {
      title: 'Number of shares*',
      dataIndex: 'sharesNo',
    },
    {
      title: 'Currency',
      dataIndex: 'Currency',
    },
    {
        title: 'Share type',
        dataIndex: 'ShareType',
      },
  ];
  // const  ShareCapitalData = [
  //   {
  //     key: '1',
  //     amount: 10000,
  //     sharesNo: 1000,
  //     Currency: 'SDG',
  //     ShareType:'Ordinary',
  //   }
  // ];
const Details = () => {
  const dispatch = useDispatch();
  const {ShareHoldersInfo} = useSelector((state)=> state.ShareHoldersInfo);
        useEffect(() => {
            dispatch(ShareHolders());
        }, [])

   const {OfficersInfo} = useSelector((state)=> state.OfficersInfo);
        useEffect(() => {
            dispatch(Officers());
        }, [])

   const {CapitalData} = useSelector((state)=> state.CapitalData);
        useEffect(() => {
            dispatch(Capitals());
        }, []);
        
  // const {ActivityData} = useSelector((state)=> state.ActivityData);
  //       useEffect(() => {
  //           dispatch(Activity());
  //       }, []);
   

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modal, setModal] = useState();
    const showModal = () => {
      setIsModalVisible(true);
      setModal(<BusinessActivities/>)
    };

    const handleOk = () => {
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };
    const newShareHolder = ()=>{
      setIsModalVisible(true);
      setModal(<NewShareHolderInfo/>);
    }
    const removeHolder = ()=>{
      setIsModalVisible(true);
      setModal(<RemoveShareHolder/>);
    }
    const paidUp = () =>{
      setIsModalVisible(true);
      setModal(<PaidUpCapital/>)
    }
    const changeAdd = ()=>{
      setIsModalVisible(true);
      setModal(<ChangeAddress/>)
    }
    return (
        <>
             <Row justify='space-around' style={{backgroundColor:'#f7f7f7'}}>
                <Col xl={15} lg={15} md={15} sm={22} xs={22}>


                    <Card title="Test Business" className={style.Card} extra={<Button size='small'>Edit</Button>} >
                       <div style={{display:'flex', fontWeight:'bold'}}><label>Former Name (if any):</label>
                        <p style={{marginLeft:'10px'}}>Kimbocorp</p></div> 
                    </Card>


                    <Card title="Business Activity" className={style.Card} extra={<Button size='small' onClick={showModal}>Edit</Button>} >
                        <Row justify='space-around'>
                            <Col xl={11} lg={11} md={11} sm={22} xs={22}>
                                <Select bordered={false} className={style.select} placeholder='Primary Activity'>
                                 
                                  {/* {
                                    ActivityData[0].Primary.map((data)=>{
                                        <Option value={data.Value} key={data.id}>{data.Value}</Option>
                                    })
                                  } */}
                                </Select>
                            </Col>
                            <Col xl={11} lg={11} md={11} sm={22} xs={22}>
                                <Select bordered={false} className={style.select} placeholder='Secondary Activity'>
                                {/* {
                                    ActivityData.Secondry.map((data)=>(
                                        <Option value={data.Value} key={data.id}>{data.Value}</Option>
                                    ))
                                } */}
                                </Select>
                            </Col>
                        </Row>
                    </Card>
                  <Card title="Shareholders" className={style.Card} extra={<Button size='small' onClick={newShareHolder}>Add</Button>} >
                        <Table className={style.table} columns={shareHolderColumns} dataSource={ShareHoldersInfo} size="small" />
                    </Card>
                    <Modal visible={isModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel}>
                      {modal}
                    </Modal>
                    <Card title="Officers / Authorised Representatives" className={style.Card} extra={<Button size='small'>Add</Button>} >
                        <Table  className={style.table}  bordered={false} columns={officersColumns} dataSource={OfficersInfo} size="small" />
                    </Card>

                    <Card title="Share capital" className={style.Card} extra={<Button size='small'>Add</Button>} >
                        <Table  className={style.table}  pagination={false} bordered={false} columns={ShareCapitalColumns} dataSource={CapitalData} size="small" />
                        <small>Number of shares including treasury shares*</small>
                    </Card>

                    <Card title="Paid-up capital" className={style.Card} extra={<Button size='small' onClick={paidUp}>Add</Button>} >
                        <Table  className={style.table}  pagination={false} bordered={false} columns={ShareCapitalColumns} dataSource={CapitalData} size="small" />
                    </Card>

                    <Card title="Registered address" className={style.Card} style={{marginBottom:'50px'}} extra={<Button size='small' onClick={changeAdd}>Add</Button>} >
                        <p>!51 Chin Swee Road Manhattan House 02-24 Singapore 169876</p>
                    </Card>
                </Col >

         {/* Right side content */}
                <Col  xl={7} lg={7} md={7} sm={22} xs={22}>
                    <Card className={style.Card} title="Client" extra="Mr.New" >
                            <label>Team:</label>
                    </Card>

                    <Card className={style.Card} title="Increase share capital">
                            <Row justify='center'>
                                <Col >
                                        <i style={{color:'red', fontWeight:'bold', marginBottom:'0px'}}>MasterCard.</i> <br/>
                                        <i style={{color:'rgb(231, 146, 35)', fontWeight:'bold'}}>SecureCode.</i>
                                </Col>
                                <Col style={{marginTop:'10px'}} >
                                    <p style={{textAlign:'center', fontSize:'12px'}}>Share capital consists of all funds raised by a company in exchange for common or preerred shares of stock. A company that wishes to raise more equity can issue and sell additional shares, thereby increasing its share capital. </p>
                                </Col>
                                <Col >
                                    <Button size='small' type='primary'style={{borderRadius:'6px'}}>Increase capital</Button>
                                </Col>
                            </Row>
                    </Card>

                    <Card className={style.Card} 
                    style={{textAlign:'center', marginBottom:'20px'}}
                    title="Change registered address">
                            <Col>
                                <MdLocationPin style={{fontSize:'50px'}}/>
                            </Col>
                            <Col>
                                <p style={{textAlign:'center', fontSize:'12px'}}>You can change your business's registered address here. Must be an address in Singapore and cannot be a PO. Box number.</p>
                            </Col>
                            <Col >
                                    <Button size='small' type='primary'>Change registered address</Button>
                            </Col>
                    </Card>
                </Col>
             </Row>
        </>
    )
}

export default Details;
