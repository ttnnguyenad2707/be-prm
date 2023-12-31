import React, { useEffect, useState } from 'react';
import { Button, Modal, Tooltip, Input, Space, Select, TreeSelect } from 'antd';
import { SearchOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const Searchbox = ({datalocation}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const locations = datalocation;
  const navigate = useNavigate();
  const location = [];
  const price = [];
  const area= [];
  const amenities = [];
  const [modalText, setModalText] = useState('Content of the modal');
  const { Search } = Input;
  const onSearch = (value, _e, info) => {
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      navigate('/search', { state: { value } });
    }, 500);
  };
  let searchResult = "";
  let filter = [];
  const sumSearch = (value) => {
    searchResult.push(value);

  }
  const showModal = () => {
    setOpen(true);
  };
  const optionsAcreage = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' }
  ];
  const optionsPrice = [
    { value: '1.000.000-3.000.000', label: '1.000.000-3.000.000' },
    { value: '3.000.000-5.000.000', label: '3.000.000-5.000.000' }
  ];

  const optionsUtilities = [
    { value: 'Tủ Lạnh', label: 'Tủ Lạnh' },
    { value: 'Điều Hòa', label: 'Điều Hòa' },
    { value: 'Bình nóng lạnh', label: 'Bình nóng lạnh' },
    { value: 'Máy giặt', label: 'Máy giặt' }
  ];
  const handleChange_location = (value) => {
    console.log(`selected ${value}`);
    location.push(value);
  };

  const handleChange_price = (value) => {
    console.log(`selected ${value}`);
    price.push(value);
  };

  const handleChange_area = (value) => {
    console.log(`selected ${value}`);
    area.push(value);
  };

  const handleChange_amenities = (value) => {
    console.log(`selected ${value}`);
    amenities.push(value);
  };
  const handleOk = () => {
    let category = [{address: location}, {price: price}, {amenities: amenities},{area: area}];
    console.log(category);
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      navigate('/search', { state: { category: category } });
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  const handleChangeInput = (e) => {
    searchResult = e.target.value;
  }
  return (
    <>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined style={{ color: '#FFF' }} />} onClick={showModal} style={{ backgroundColor: '#E66D4F' }} />
      </Tooltip>
      <Modal
        title="Search"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Search"
      >
        <div className='d-flex flex-column row-gap-3'>
          <Search placeholder="Tìm kiếm phòng trọ..." onSearch={onSearch} onChange={handleChangeInput} size='30px' />
          <h6>Filter</h6>
          <div className='select-option d-flex column-gap-2'>
            {/* <Select
              mode="multiple"
              allowClear
              style={{
                width: '50%',
              }}
              placeholder="Vị Trí"
              onChange={handleChange}
              options={optionsLocation}
            /> */}
            <TreeSelect
              style={{
                width: '50%',
              }}
              dropdownStyle={{
                maxHeight: 400,
                overflow: 'auto',
              }}
              treeData={locations}
              placeholder="Vị trí"
              onSelect={handleChange_location}
              allowClear
            />
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '50%',
              }}
              placeholder="Diện Tích"
              onSelect={handleChange_area}
              options={optionsAcreage}
            />
          </div>
          <div className='select-option d-flex column-gap-2'>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '50%',
              }}
              placeholder="Giá Tiền"
              onSelect={handleChange_price}
              options={optionsPrice}
            />
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '50%',
              }}
              placeholder="Tiện Ích"
              onSelect={handleChange_amenities}
              options={optionsUtilities}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Searchbox;