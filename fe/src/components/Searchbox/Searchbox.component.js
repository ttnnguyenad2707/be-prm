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
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }
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
          <Search placeholder="Tìm kiếm phòng trọ..." onSearch={onSearch} onChange={handleChangeInput} size='large' />
          <h6>Filter</h6>
          <div className='select-option d-flex column-gap-2'>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '50%',
              }}
              placeholder="Please select"
              onChange={handleChange}
              options={options}
            />
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '50%',
              }}
              placeholder="Please select"
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className='select-option d-flex column-gap-2'>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '50%',
              }}
              placeholder="Please select"
              onChange={handleChange}
              options={options}
            />
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '50%',
              }}
              placeholder="Please select"
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Searchbox;