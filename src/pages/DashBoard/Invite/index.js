import React from 'react';
import { IoMdPeople } from "react-icons/io";
import {CloseOutlined, CheckOutlined  } from '@ant-design/icons';
import style from './Invite.module.less'
import { Col, Row, Button, Input} from 'antd';

const Invite = () => {
  return (
      <>
            <Row justify='space-around' style={{marginBottom:'15px'}}>
                <Col xl={15} lg={15} md={15} sm={22} xs={22} className={style.Card}>
                    <Row justify='space-between'>
                        <p>Manage collaborators</p>
                        <Button style={{borderRadius:'5px'}}>Add collaborator</Button>
                    </Row>
                    <Row justify='space-between' style={{backgroundColor:'#f7f7f7', padding:'10px', marginTop:'20px', color:'#7e7e7e'}}>
                        <Col>Collaborator</Col>
                        <Col>Actions</Col>
                    </Row>


                    <Row justify='space-between' style={{padding:'10px' , color:'#b4b4b4'}}>
                        <Col>admin123@example.com</Col>
                        <Col>
                            <label htmlFor='delete'><u style={{color:'#00ac8c', cursor:'pointer'}}>Delete</u></label>
                            <Button id='delete' style={{display:'none'}} onClick={()=>{ window.alert('button is working')}}>Delete</Button>
                        </Col>
                    </Row>

                    <Row justify='space-between' style={{padding:'10px' , color:'#b4b4b4'}}>
                        <Col>
                            <Input type='email' bordered={false} placeholder='Enter a email' style={{borderBottom:'1px solid #b4b4b4'}}></Input>
                        </Col>
                        <Col>
                            <label htmlFor='delete' style={{color:'#00ac8c', marginRight:'15px', cursor:'pointer'}}><CheckOutlined/></label>
                            <Button id='delete' style={{display:'none'}} onClick={()=>{ window.alert('button is working')}}>Check</Button>
                            <label htmlFor='delete' style={{color:'#00ac8c', cursor:'pointer'}}><CloseOutlined/></label>
                            <Button id='delete' style={{display:'none'}} onClick={()=>{ window.alert('button is working')}}>Close</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xl={7} lg={7} md={7} sm={22} xs={22} className={style.Card}>
                    <Row>Collaborators</Row>
                    <hr/>
                    <Row justify='center'>
                        <IoMdPeople className={style.icon}/>
                    </Row>
                    <Row >
                            <small style={{textAlign:'center'}}>Manage this project with others. 
                                They'll be able to view your project,
                                 chat with Webside, create milestones and deposit funds.
                            </small>
                    </Row>
                </Col>
            </Row>
      </>
  );
};

export default Invite;
