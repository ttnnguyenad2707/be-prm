import React, { useState } from 'react';
import { Button, Modal, Tooltip, Input, Space, Select } from 'antd';
import { SearchOutlined, CaretDownOutlined } from '@ant-design/icons';
const Searchbox = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  let searchResult = "";
  let category = [];
  let filter = [];
  const sumSearch = (value) =>{
    searchResult.push(value);

  }
  const showModal = () => {
    setOpen(true);
  };
  const optionsLocation = [
    { value: 1, label: 'Hoa Lac' },
    { value: 2, label: 'Thach That' },
    { value: 3, label: 'Quoc Oai' },
    { value: 4, label: 'Son Tay' },
    { value: 5, label: 'Phuc Tho' },
    { value: 6, label: 'Ha Noi' }
  ];
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
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    category.push(value);
  };
  const handleOk = () => {
    filter.push(...category,searchResult);
    console.log(filter, 'hay');
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
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
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '50%',
              }}
              placeholder="Vị Trí"
              onChange={handleChange}
              options={optionsLocation}
            />
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '50%',
              }}
              placeholder="Diện Tích"
              onChange={handleChange}
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
              onChange={handleChange}
              options={optionsPrice}
            />
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '50%',
              }}
              placeholder="Tiện Ích"
              onChange={handleChange}
              options={optionsUtilities}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Searchbox;