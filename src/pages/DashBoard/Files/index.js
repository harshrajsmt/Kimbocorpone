import React from 'react';
import style from './Files.module.less'
import fileImg from './Images/file.png'
import { IoMdEye, IoMdDownload } from 'react-icons/io';
import { Col, Row, Select} from 'antd';

const {Option} = Select;
const Files = () => {
  return (
      <>
        <Row justify='center'>
            <Col span={22}>
                
                <Row justify='center'>
                    <Col className={style.Card} span={22}>
                        <p style={{marginLeft:'15px'}}>File upload</p>
                        <Row className={style.fileBox} justify='center'>
                                <Col xl={11} lg={11} md={11} sm={22} xs={22} style={{height:'150px'}}>
                                    <img src={fileImg} style={{float:'right', height:'100%'}}></img>
                                </Col>
                                <Col xl={11} lg={11} md={11} sm={22} xs={22} 
                                style={{display:'flex',justifyContent:'center', flexDirection:'column', height:'150px'}}>
                                    Drop or select a file
                                    <label style={{color:'#b4b4b4'}} htmlFor='file'>
                                        Drop file here or click <u style={{color:'#00ac8c'}}>browse</u> through your machine
                                    </label>
                                    <input style={{display:'none'}} type='file' id='file'></input>
                                </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginBottom:'20px'}} justify='center'>
                    <Col className={style.Card} span={22}>
                        <Row justify='center' style={{marginTop:'15px'}}> 
                            <Col xl={10} lg={10} md={10} sm={22} xs={22}>
                                <Select defaultValue="Filter the files" style={{ width: '100%' }}>
                                    <Option value="Time">Time</Option>
                                    <Option value="Size">Size</Option>
                                    <Option value="Name">Name</Option>
                                </Select>
                            </Col>
                            <Col span={22} className={style.table}>
                                <table >
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
