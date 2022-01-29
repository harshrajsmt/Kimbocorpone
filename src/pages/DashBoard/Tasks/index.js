import React from 'react';
import style from './Tasks.module.less'
// import { BsThreeDots } from 'react-icons/bs';
import { Col, Row, Button, Input, Menu, Dropdown,  } from 'antd';

const Tasks = () => {

  const menu = (
    <Menu >
      <Menu.Item key="1" >
        <Button >Edit</Button>
      </Menu.Item>
      <Menu.Item key="2" >
      <Button >Delete</Button>
      </Menu.Item>
    </Menu>
  );
  return (
      <>
        <Row justify='space-around'>
            <Col span={4} style={{marginTop:'20px'}}>
                <Button style={{width:'100%'}} >+ Add Section</Button>
            </Col>
            <Col span={4}>
              <Row className={style.addsection}>
                <Col span={17}><Input bordered={false} placeholder='Title'></Input></Col>
                <Col span={4}>
                  <Dropdown.Button placement='bottomLeft' overlay={menu}>
                  </Dropdown.Button>
                </Col>
              </Row>
              <Button style={{width:'100%'}}>+ Add Section</Button>
            </Col>
        </Row>
      </>
  );
};

export default Tasks;
