import React from 'react';
import style from './Files.module.less'
import { IoMdEye, IoMdDownload } from 'react-icons/io';
import { Col, Row, Select} from 'antd';

const {Option} = Select;
const Files = () => {
  return (
      <>
        <Row justify='center'>
            <Col span={22}>
                
                <Row>
                    <Col className={style.Card} span={22}>
                        <p>File upload</p>
                        <div style={{width:'100%', backgroundColor:'#f7f7f7', display:'flex'}}>
                                <div style={{width:'50%'}}>gfdd</div>
                                <div style={{width:'50%'}}>dgdfgds</div>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col className={style.Card} span={22}>
                        <Row justify='center'> 
                            <Col span={10}>
                                <Select defaultValue="Filter the files" style={{ width: '100%' }}>
                                    <Option value="Time">Time</Option>
                                    <Option value="Size">Size</Option>
                                    <Option value="Name">Name</Option>
                                </Select>
                            </Col>
                            <Col span={22}>
                                <table>
                                    <tr style={{backgroundColor:'#dad8d8'}}>
                                        <th>File Name</th>
                                        <th>Size</th>
                                        <th>Posted at</th>
                                        <th>Actions</th>
                                    </tr>
                                    <tr>
                                        <td>introduce.pdf</td>
                                        <td>312 kb</td>
                                        <td>09/12/2021</td>
                                        <td style={{color:'#000'}}><IoMdEye style={{marginRight:'20px'}} /><IoMdDownload/></td>
                                    </tr>
                                    <tr>
                                        <td>introduce.pdf</td>
                                        <td>312 kb</td>
                                        <td>09/12/2021</td>
                                        <td style={{color:'#000'}}><IoMdEye style={{marginRight:'20px'}} /><IoMdDownload/></td>
                                    </tr>
                                    <tr>
                                        <td>introduce.pdf</td>
                                        <td>312 kb</td>
                                        <td>09/12/2021</td>
                                        <td style={{color:'#000'}}><IoMdEye style={{marginRight:'20px'}} /><IoMdDownload/></td>
                                    </tr>
                                    <tr>
                                        <td>introduce.pdf</td>
                                        <td>312 kb</td>
                                        <td>09/12/2021</td>
                                        <td style={{color:'#000'}}><IoMdEye style={{marginRight:'20px'}} /><IoMdDownload/></td>
                                    </tr>
                                </table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
      </>
  );
};

export default Files;
