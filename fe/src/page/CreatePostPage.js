
import "./CreatePostPage.scss"
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { TiDelete } from 'react-icons/ti'
import { Autocomplete, TextField, TextareaAutosize } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { FormControlLabel } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Cookies from "js-cookie";
import { createPost } from "../services/post.service";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useOutletContext } from "react-router-dom";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const CreatePostPage = () => {
    const token = Cookies.get('accessToken');
    // console.log("token", token);
    const [user] = useOutletContext();
    console.log("render", user);
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();
    const handleDrop = (acceptedFiles) => {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    };
    const handleRemoveFile = (event, fileName) => {

        event.stopPropagation();
        setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    };
    const images = []
    // const [uploadedImages, setUploadedImages] = useState([]);

    const uploadToCloudinary = async () => {
        try {
            for (const file of files) {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('folder', "RoomRadar");
                formData.append('upload_preset', 'roomRadarPreset');
                formData.append('public_id', uuidv4());
                const response = await axios.post(
                    `https://api.cloudinary.com/v1_1/dmoge1fpo/upload`,
                    formData
                );

                console.log('Upload success:', response.data.url);
                // setImages(prevImages => [...prevImages, response.data.url]);
                // setUploadedImages((prevImages) => [...prevImages, response.data.url]);
                images.push(response.data.url)
                console.log("images", images);
                // TODO: Xử lý tệp đã tải lên trên Cloudinary
            }
        } catch (error) {
            console.error('Upload error:', error);
            // TODO: Xử lý lỗi tải lên
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop, multiple: true });

    ////////////////
    const [districts, setDistricts] = useState([]); //quận huyện
    const [provinces, setProvinces] = useState([]); // tỉnh thành phố
    const [wards, setWards] = useState([]); //xa/phuong


    const Category = [
        { title: 'Nhà chung cư mini' },
        { title: 'trọ chung chủ' },
        { title: 'căn hộ cao cấp' },
    ]
    const Security = [
        { title: 'Khóa vân tay' },
        { title: 'chung chủ an ninh đảm bảo' },
        { title: 'PCCC' },
        { title: 'camera' },
        { title: 'còi báo động' },
        { title: 'thẻ ra vào' },



    ]
    const Interior = [
        { title: 'Tủ lạnh' },
        { title: 'Điều Hòa' },
        { title: 'giường' },
        { title: 'bàn học' },
        { title: 'bếp' },
        { title: 'bình nóng' },
        { title: 'bàn' },
        { title: 'wifi' },

        { title: 'giường' },
        { title: 'tủ quần áo' },

    ]
    const Utils = [
        { title: 'máy giặt' },
        { title: 'quán cà phê' },
        { title: 'sân phơi' },
        { title: 'Phòng tập gym' },
        { title: 'hầm để xe' },



    ]
    // console.log("provinces", provinces);

    useEffect(() => {

        fetchData();


    }, []);


    const uploadImages = async () => {
        if (files.length > 0) {
            try {
                await uploadToCloudinary();

            } catch (error) {
                console.error('Upload error:', error);
            }
        }
    };
    const fetchData = async () => {
        try {
            const response = await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');

            setProvinces(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleProvincesChange = (event, newValue, form) => {

        const selectedProvince = provinces.find((city) => city.Name === newValue);

        if (selectedProvince) {

            const districtList = selectedProvince.Districts.map((district) => district.Name);
            console.log("districtList", districtList);
            if (!districtList.includes(form.values.district)) {
                form.setFieldValue('district', '');
                //Xóa giá trị trên form của trường "district" nếu không thuộc danh sách districtList
                form.setFieldValue('ward', '');
                form.setFieldValue('numberAddress', '');
            }
            setDistricts(districtList);

        }

        else {
            setDistricts([]);
            form.setFieldValue('district', '');
        }

    };
    const handleDistrictChange = (event, newValue, form) => {
        const selectedProvince = provinces.find((city) => city.Name === form.values.address);
        const selectedDistrict = selectedProvince?.Districts.find((district) => district.Name === newValue);

        if (selectedDistrict) {
            const wardList = selectedDistrict.Wards.map((ward) => ward.Name);
            if (!wardList.includes(form.values.ward)) {
                form.setFieldValue('ward', '');
            }
            setWards(wardList);
        } else {
            setWards([]);
            form.setFieldValue('ward', '');
        }
    };


    const handleSubmitForm = async (values) => {

        validateForm(values); // Kiểm tra hợp lệ

        const { district, ward, numberAddress, ...restValues } = values;  // Loại bỏ trường district,ward (useState) từ đối tượng values vì bị thừa, numberAddress ko can vi ko phai state
        const fullAddress = `${restValues.address}, ${values.district}, ${values.ward}, ${values.numberAddress}`;



        await uploadImages(); //Điều này đảm bảo rằng quá trình tải lên ảnh hoàn thành trước khi dữ liệu form được gửi đi.

        const data = {
            ...restValues,
            address: fullAddress,
            images: images,
            owner:user._id

        }
        console.log(data);


        try {
            const res = await createPost(data, token)
            console.log("res from form", res);
            toast.success(`Create success!`)
            navigate("/stored/posted")

            // const dataRespon = res?.data?.article
            // navigate(`/article/${dataRespon.slug}`)
        } catch (error) {
            console.log(error);
            toast.danger(`Create fail!`)

        }
    }
    const validateForm = (values) => {
        const errors = {};

        if (!values.title) {
            toast.error(`title can not be blank.`)


        }
        else if (!values.category) {
            toast.error(`category can not be blank.`)

        }
        else if (!values.area) {
            toast.error(`area can not be blank.`)

        }


        return errors;
    };
    return (
        <div>
            <div className="container post-create">
                <div className=" my-2">
                    <h1 className='createTitle'>Đăng Tin</h1>
                </div>


                <Formik
                    initialValues={{
                        title: '',
                        price: '',
                        description: '',
                        category: '',
                        address: '',
                        area: '',
                        maxPeople: 0,
                        price: 0,
                        deposit: 0,
                        security: [

                        ],
                        interior: [

                        ],
                        utils: [

                        ],
                        images: [

                        ]
                    }}
                    onSubmit={handleSubmitForm}
                // validate={validateForm}

                >
                    <Form>
                        <div className="row">
                            <div className="col-4">
                                <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
                                    <input {...getInputProps()} />

                                    {isDragActive ? (
                                        <p>Thả các tệp tin vào đây...</p>
                                    ) : (
                                        <p>Kéo và thả các tệp tin vào đây, hoặc nhấp để chọn tệp tin</p>
                                    )}

                                    <div className="preview">
                                        {files.map((file) => (
                                            <div key={file.name} className="file-preview">
                                                {file.type.startsWith('video/') ? (
                                                    <video src={URL.createObjectURL(file)} controls></video>
                                                ) : (
                                                    <img src={URL.createObjectURL(file)} alt={file.name} />
                                                )}
                                                <TiDelete className="delete-button"
                                                    onClick={(event) => handleRemoveFile(event, file.name)}>

                                                </TiDelete>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="col-8">
                                <div className="my-2">


                                    <Field className="form-control" name="title" as={TextField} label="Tiêu đề bài đăng" variant="outlined" />
                                </div>

                                <div className="my-2">
                                    <Field className="form-control" name="description" as={TextareaAutosize} placeholder="Mô tả bài đăng" variant="outlined" row={4} style={{ height: '200px' }}/>
                                </div>
                                <div className="my-2">
                                    <Field className="form-control" name="area" as={TextField} label="Diện tích" variant="outlined" />
                                </div>



                                <div className="my-2">
                                    <Field name="category" >
                                        {({ field, form }) => (
                                            <Autocomplete
                                                {...field}
                                                id="free-solo-demo"
                                                freeSolo
                                                options={Category.map((option) => option.title)}
                                                onChange={(event, newValue) => {
                                                    form.setFieldValue('category', newValue); // Cập nhật giá trị vào đối tượng values
                                                }}
                                                onInputChange={(event, newInputValue) => {
                                                    form.setFieldValue('category', newInputValue); // Cập nhật giá trị vào đối tượng values khi nhập tay
                                                }}
                                                renderInput={(params) => <TextField {...params} label="Category" />}
                                            />
                                        )}
                                    </Field>

                                </div>
                                <h5>Địa chỉ</h5>
                                <hr />
                                <div className="my-2">
                                    <div className="row">
                                        <div className="col-3"> <Field name="address"  >
                                            {({ field, form }) => (
                                                <div>
                                                    <InputLabel htmlFor="address">Address</InputLabel>
                                                    <Select
                                                        {...field}
                                                        id="address"
                                                        value={field.value}
                                                        onChange={(event) => {
                                                            form.setFieldValue('address', event.target.value);
                                                            handleProvincesChange(event, event.target.value, form);
                                                        }}
                                                    >
                                                        {provinces.map((option) => (
                                                            <MenuItem key={option.Name} value={option.Name}>
                                                                {option.Name}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </div>
                                            )}
                                        </Field></div>

                                        <div className="col-3"> <Field name="district">
                                            {({ field, form }) => (
                                                <div>
                                                    <InputLabel htmlFor="district">District</InputLabel>
                                                    <Select
                                                        {...field}
                                                        id="district"
                                                        value={field.value}
                                                        onChange={(event) => {
                                                            form.setFieldValue('district', event.target.value);
                                                            handleDistrictChange(event, event.target.value, form);
                                                        }}
                                                    >
                                                        {districts.map((district) => (
                                                            <MenuItem key={district} value={district}>
                                                                {district}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </div>
                                            )}
                                        </Field></div>
                                        <div className="col-3"> <Field name="ward">
                                            {({ field, form }) => (
                                                <div>
                                                    <InputLabel htmlFor="ward">Ward</InputLabel>
                                                    <Select
                                                        {...field}
                                                        id="ward"
                                                        value={field.value}
                                                        onChange={(event) => {
                                                            form.setFieldValue('ward', event.target.value);
                                                        }}
                                                    >
                                                        {wards.map((ward) => (
                                                            <MenuItem key={ward} value={ward}>
                                                                {ward}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </div>
                                            )}
                                        </Field></div>
                                        <div className="col-3 mt-4">
                                            <Field className="form-control" name="numberAddress" as={TextField} label="Số nhà" variant="outlined" />

                                        </div>

                                    </div>


                                </div>
                                <hr />
                                <h5>Tiện ích phòng trọ </h5>

                                <div className="row">

                                    <div className="my-2 col-4">
                                        <Field inputProps={{ min: 0 }} className="" type="number" name="maxPeople" as={TextField} label="MaxPeople" variant="outlined" />

                                    </div>

                                    <div className="my-2 col-4">
                                        <Field inputProps={{ min: 0 }} className="" type="number" name="price" as={TextField} label="Price/month" variant="outlined" />

                                    </div>
                                    <div className="my-2 col-4">
                                        <Field inputProps={{ min: 0 }} className="" type="number" name="deposit" as={TextField} label="Deposit" variant="outlined" />

                                    </div>
                                </div>

                                <div className="my-2">
                                    <div className="col-3"> <Field name="security">
                                        {({ field, form }) => (
                                            <div>
                                                <Autocomplete
                                                    multiple
                                                    id="checkboxes-tags-demo"
                                                    value={field.value.title} // nếu muốn lấy dưới dạng obj key : value thì là field.value

                                                    options={Security}
                                                    disableCloseOnSelect
                                                    getOptionLabel={(option) => option.title}
                                                    renderOption={(props, option, { selected }) => (
                                                        <li {...props}>
                                                            <Checkbox
                                                                icon={icon}
                                                                checkedIcon={checkedIcon}
                                                                style={{ marginRight: 8 }}
                                                                checked={selected}
                                                            />
                                                            {option.title}
                                                        </li>
                                                    )}
                                                    style={{ width: 500 }}
                                                    renderInput={(params) => (
                                                        <TextField {...params} label="Security" placeholder="Security" />
                                                    )}
                                                    onChange={(event, values) => {
                                                        const selectedValues = values.map(item => item.title);
                                                        form.setFieldValue('security', selectedValues);
                                                        // form.setFieldValue('security', values); khi mà muốn lấy dưới dạng obj

                                                    }}
                                                />
                                            </div>
                                        )}
                                    </Field></div>
                                </div>
                                <div className="my-2">
                                    <div className="col-3"> <Field name="interior">
                                        {({ field, form }) => (
                                            <div>
                                                <Autocomplete
                                                    multiple
                                                    // id="checkboxes-tags-demo"
                                                    value={field.value.title} // nếu muốn lấy dưới dạng obj key : value thì là field.value
                                                    options={Interior}
                                                    disableCloseOnSelect
                                                    getOptionLabel={(option) => option.title}
                                                    renderOption={(props, option, { selected }) => (
                                                        <li {...props}>
                                                            <Checkbox
                                                                icon={icon}
                                                                checkedIcon={checkedIcon}
                                                                style={{ marginRight: 8 }}
                                                                checked={selected}
                                                            />
                                                            {option.title}
                                                        </li>
                                                    )}
                                                    style={{ width: 500 }}
                                                    renderInput={(params) => (
                                                        <TextField {...params} label="Interior" placeholder="Interior" />
                                                    )}
                                                    onChange={(event, values) => {
                                                        const selectedValues = values.map(item => item.title);
                                                        form.setFieldValue('interior', selectedValues);
                                                        // form.setFieldValue('interior', values); khi mà muốn lấy dưới dạng obj

                                                    }}
                                                />
                                            </div>
                                        )}
                                    </Field></div>
                                </div>
                                <div className="my-2">
                                    <div className="col-3"> <Field name="utils">
                                        {({ field, form }) => (
                                            <div>
                                                <Autocomplete
                                                    multiple
                                                    // id="checkboxes-tags-demo"
                                                    value={field.value.title} // nếu muốn lấy dưới dạng obj key : value thì là field.value thôi 

                                                    options={Utils}
                                                    disableCloseOnSelect
                                                    getOptionLabel={(option) => option.title}
                                                    renderOption={(props, option, { selected }) => (
                                                        <li {...props}>
                                                            <Checkbox
                                                                icon={icon}
                                                                checkedIcon={checkedIcon}
                                                                style={{ marginRight: 8 }}
                                                                checked={selected}
                                                            />
                                                            {option.title}
                                                        </li>
                                                    )}
                                                    style={{ width: 500 }}
                                                    renderInput={(params) => (
                                                        <TextField {...params} label="Utils" placeholder="Utils" />
                                                    )}
                                                    onChange={(event, values) => {
                                                        const selectedValues = values.map(item => item.title);
                                                        form.setFieldValue('utils', selectedValues);
                                                        // form.setFieldValue('utils', values); khi mà muốn lấy dưới dạng obj 

                                                    }}
                                                />
                                            </div>
                                        )}
                                    </Field></div>
                                </div>





                                <div className="my-2">
                                    <button className="btn btn-success form-control" type="submit">Submit</button>
                                </div>



                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default CreatePostPage;