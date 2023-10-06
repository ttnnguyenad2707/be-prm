import React from 'react';
import { Col, Row, Input, Space, Layout } from 'antd';
import "./Category.scss"

// div chưa back gound hinh anh , the p
const Category = () => {
    return (
            <Row>
                <Col span={6}>
                    <div className='card-category'>
                    <img src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2Frjq_hJ7gB7GiIAQxQb0asRoth0XAzu3tSoDUSnpLyc4%2Fpreset%3Araw%2Fplain%2Ff2dbf70b2f11e1802d88eaa20566061b-2817690660533857918.jpg&w=256&q=75" 
                    alt="Girl in a jacket" className='background-img'/>
                    <h6 className='category'>Category</h6>
                    </div>
                </Col>
                <Col span={6}>
                    <div className='card-category'>
                    <img src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FcM1_zUDBh1GoukqvhI_yNGeyJckMCbt7LB6-ZLpmcqY%2Fpreset%3Araw%2Fplain%2Fa3ca65703e54e4e802fffec5607f3510-2817690642886410249.jpg&w=256&q=75" 
                    alt="Girl in a jacket" className='background-img'/>
                    <h6 className='category'>Category</h6>
                    </div>
                </Col>
                <Col span={6}>
                    <div className='card-category'>
                    <img src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2Frjq_hJ7gB7GiIAQxQb0asRoth0XAzu3tSoDUSnpLyc4%2Fpreset%3Araw%2Fplain%2Ff2dbf70b2f11e1802d88eaa20566061b-2817690660533857918.jpg&w=256&q=75" 
                    alt="Girl in a jacket" className='background-img'/>
                    <h6 className='category'>Category</h6>
                    </div>
                </Col>
                <Col span={6}>
                    <div className='card-category'>
                    <img src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FcM1_zUDBh1GoukqvhI_yNGeyJckMCbt7LB6-ZLpmcqY%2Fpreset%3Araw%2Fplain%2Fa3ca65703e54e4e802fffec5607f3510-2817690642886410249.jpg&w=256&q=75" 
                    alt="Girl in a jacket" className='background-img'/>
                    <h6 className='category'>Category</h6>
                    </div>
                </Col>
            </Row>
    );
}
export default Category;