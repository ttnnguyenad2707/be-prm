import React, { useState } from 'react';
import {  Row, Input, Space, Dropdown, message, Button, Checkbox, Menu } from 'antd';
import  { MessageOutlined, BellOutlined, PlusOutlined, DownOutlined, UnorderedListOutlined, CaretDownOutlined } from '@ant-design/icons';
import './header.scss'

import { Outlet } from 'react-router-dom';

/* logo , search space with icon search, icon notifiaction, icon search, link login, link register, button post */

const Headercomponent = () => {
    const [selectedKeys, setSelectedKeys] = useState([]);
    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };
    const items = [
        {
            label: '1st menu item',
            key: '1',
            render: () => {

            }
        },
        {
            label: '2nd menu item',
            key: '2',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];
    const handleMenuClick = ({ key }) => {
        setSelectedKeys((prevSelectedKeys) => {
            if (prevSelectedKeys.includes(key)) {
                return prevSelectedKeys.filter((item) => item !== key);
            }
            return [...prevSelectedKeys, key];
        });
    };
    const menu = (
        <Menu onClick={handleMenuClick}>
            {items.map((item) => (
                <Menu.Item key={item.key}>
                    <Checkbox checked={selectedKeys.includes(item.key)}>
                        {item.label}
                    </Checkbox>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div className='Body'>
            <div className='position-sticky top-0 start-0 end-0 z-1 background-primary' style={{ padding: '15px 0' }}>
                <Row className='header-container container-fluid justify-content-between ps-5 pe-5'>
                    <div className='d-flex align-item-center gap-3'>
                        <h1 id='logo'>HomeRadar</h1>
                        <button className='btn-list'>
                            <Dropdown
                                menu={{
                                    items,
                                    onClick,
                                }}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space style={{ color: '#E66D4F', fontSize: 'medium', fontWeight: 'bold' }}>
                                        <UnorderedListOutlined style={{ marginRight: '5px', fontSize: '25px' }} />
                                        Danh sách
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </button>
                    </div>
                    <div >

                        <div className='search-box'>
                            <Search placeholder="Tìm kiếm phòng trọ..." onSearch={onSearch} size='large' />
                            <div className='dropdown-option'>
                                <Dropdown
                                    overlay={menu}
                                    placement="bottomLeft"
                                    arrow
                                    className='margin-right50'
                                >
                                    <Button>bottomLeft <CaretDownOutlined style={{ marginLeft: '25px' }} /></Button>
                                </Dropdown>
                                <Dropdown
                                    overlay={menu}
                                    placement="bottomLeft"
                                    arrow
                                    className='margin-right50'
                                >
                                    <Button>bottomLeft <CaretDownOutlined style={{ marginLeft: '25px' }} /></Button>
                                </Dropdown>
                                <Dropdown
                                    overlay={menu}
                                    placement="bottomLeft"
                                    arrow
                                    className='margin-right50'
                                >
                                    <Button>bottomLeft <CaretDownOutlined style={{ marginLeft: '25px' }} /></Button>
                                </Dropdown>
                                
                            </div>
                        </div>
                    </div>
                    {/* <Col >
                        
                    </Col> */}
                    <div className='d-flex align-items-center gap-3'>
                        <button className='btn-bell position-relative'>
                            <BellOutlined style={{ fontSize: '25px', color: '#e25e3e' }} />
                            <p className='number-notification' >1</p>
                            <div className='list-notification'>
                                <div className='notification'>
                                    <p>Hệ thống đang xác nhận yêu cầu của bạn</p>
                                </div>
                                <div className='notification'>
                                    <p>Hệ thống đang xác nhận yêu cầu của bạn</p>
                                </div>
                            </div>
                        </button>
                        <button className='btn-mess position-relative'>
                            <MessageOutlined style={{ fontSize: '25px', color: '#e25e3e' }} />
                            <p className='number-notification'>1</p>
                        </button>
                        <a className='login'>Đăng nhập</a>
                        <button className='btn-post'><PlusOutlined style={{ fontSize: '15px', color: 'white' }} /> Đăng tin</button>
                    </div>
                </Row>
            </div>
            <Outlet />
        </div>
    );
}

export default Headercomponent;