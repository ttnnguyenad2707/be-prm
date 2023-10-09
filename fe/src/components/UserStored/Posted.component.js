import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Posted.scss'
import images from '../../assets/images';
import { Tabs } from 'antd';
const Posted = () => {
    const items = [
        {
            key: '1',
            label: 'Bài viết đã đăng',
            children: 'Content of Tab Pane 1',
        },
        {
            key: '2',
            label: 'Bài viết đã xóa',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
        },
    ];

    return (
        <div className='component-usePosted bg-F4F4F4 '>
            <div className='container'>
                <div className='content '>
                    <div className='component-title'>Quản lý tin của bạn</div>
                    <div className='profile-user d-flex justify-content-between border-1 border'>

                        <div className='user-box d-flex align-items-center gap-3'>
                            <div className='avatar' >
                                <img src={images.avatarDefault} alt='avatar' height="80px" />
                            </div>
                            <div className='user-link d-flex flex-column gap-2'>
                                <div className='username'>Nguyeen Tran</div>
                                <div className='list-button d-flex gap-2'>
                                    <button className='btn btn-outline-danger'>Trang cá nhân</button>
                                    <button className='btn btn-outline-danger'>Đăng bài viết mới </button>
                                </div>
                            </div>
                        </div>
                        <div className='more-info d-flex flex-column gap-3'>
                            <div className='btn-bg-primary text-white p-2 rounded'>Loại tài khoản: <strong>VIP</strong></div>
                            <div className='btn-bg-primary text-white p-2 rounded'>Số lượng bài đăng: <strong>1 / 100</strong></div>

                        </div>

                    </div>
                    <Tabs defaultActiveKey="1" items={items} /> 
                </div>
            </div>
            
        </div>
        
    )
}

export default Posted