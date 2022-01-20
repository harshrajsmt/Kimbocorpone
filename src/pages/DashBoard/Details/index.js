import React from 'react'
import { MdModeEdit, MdLocationPin} from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io'; 
import style from './Details.module.less'
import { Col, Row, Card, Button, Select, Table} from 'antd';
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
  const shareHolderData = [
    {
      key: '1',
      name: 'John Brown',
      Currency: 32,
      Appointment: '18/01/2022',
      Action:<div><MdModeEdit style={{marginRight:'10px'}}/> <IoMdTrash/></div>,
    }
  ];

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
  const officersData = [
    {
      key: '1',
      name: 'John Brown',
      Nationality: 'Singapore / Director',
      Appointment: '18/01/2022',
      Action:<div><MdModeEdit style={{marginRight:'10px'}}/> <IoMdTrash/></div>,
    }
  ];

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
  const  ShareCapitalData = [
    {
      key: '1',
      amount: 10000,
      sharesNo: 1000,
      Currency: 'SDG',
      ShareType:'Ordinary',
    }
  ];
const Details = () => {
    return (
        <>
             <Row justify='space-around' style={{backgroundColor:'#f7f7f7'}}>
                <Col xl={15} lg={15} md={15} sm={22} xs={22}>


                    <Card title="Test Business" className={style.Card} extra={<Button size='small'>Edit</Button>} >
                       <div style={{display:'flex', fontWeight:'bold'}}><label>Former Name (if any):</label>
                        <p style={{marginLeft:'10px'}}>Kimbocorp</p></div> 
                    </Card>


                    <Card title="Business Activity" className={style.Card} extra={<Button size='small'>Edit</Button>} >
                        <Row justify='space-around'>
                            <Col xl={11} lg={11} md={11} sm={22} xs={22}>
                                <Select bordered={false} className={style.select} placeholder='Primary Activity'>
                                    <Option value="one">Business Activity one</Option>
                                    <Option value="two">Business Activity two</Option>
                                    <Option value="three">Business Activity three</Option>
                                </Select>
                            </Col>
                            <Col xl={11} lg={11} md={11} sm={22} xs={22}>
                                <Select bordered={false} className={style.select} placeholder='Secondary Activity'>
                                    <Option value="one">Business Activity one</Option>
                                    <Option value="two">Business Activity two</Option>
                                    <Option value="three">Business Activity three</Option>
                                </Select>
                            </Col>
                        </Row>
                    </Card>


                    <Card title="Shareholders" className={style.Card} extra={<Button size='small'>Add</Button>} >
                        <Table  columns={shareHolderColumns} dataSource={shareHolderData} size="small" />
                    </Card>

                    <Card title="Officers / Authorised Representatives" className={style.Card} extra={<Button size='small'>Add</Button>} >
                        <Table bordered={false} columns={officersColumns} dataSource={officersData} size="small" />
                    </Card>

                    <Card title="Share capital" className={style.Card} extra={<Button size='small'>Add</Button>} >
                        <Table pagination={false} bordered={false} columns={ShareCapitalColumns} dataSource={ShareCapitalData} size="small" />
                        <small>Number of shares including treasury shares*</small>
                    </Card>

                    <Card title="Paid-up capital" className={style.Card} extra={<Button size='small'>Add</Button>} >
                        <Table pagination={false} bordered={false} columns={ShareCapitalColumns} dataSource={ShareCapitalData} size="small" />
                    </Card>

                    <Card title="Registered address" className={style.Card} style={{marginBottom:'50px'}} extra={<Button size='small'>Add</Button>} >
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
