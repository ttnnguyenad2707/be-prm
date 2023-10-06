import React from 'react'
import "./Profile.scss"
import 'bootstrap/dist/css/bootstrap.css';
import images from '../../assets/images';
import { Link } from 'react-router-dom';



const Profile = () => {
    console.log(images.avatarDefault);

    return (
        <div className='component component-profile bg-F4F4F4'>
            <div className='container'>
                <div className='row gap-3'>
                    <div className='col-md-3 bg-light h-fit-content'>
                        <div className='sidebar'>
                            <div className='sidebar-title'>Thông tin cá nhân</div>
                            <div className='sidebar-option'>
                                <Link to='/profile' className='check' >Thông tin cá nhân</Link>
                                <Link to='/changepassword' className='uncheck'>Thay đổi password</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col bg-light'>
                        <div className='profile-detail'>

                            <div className='profile-form'>
                                <form method='POST' action=''>
                                    <div className='profile-title'>
                                        Hồ sơ cá nhân
                                    </div>
                                    <div className='avatar d-flex align-items-center gap-5 mb-4'>
                                        <img src={images.avatarDefault} alt='avatar default'></img>
                                        <div className='btn-upload'>                                           
                                            <label htmlFor='uploadAvatar'>
                                                <div className="btn btn-bg-primary text-white btn-radius">Upload file</div>
                                            </label>
                                            <input type='file' id='uploadAvatar' hidden></input>
                                        </div>
                                        <div className="btn btn-bg-danger text-white btn-radius">Remove</div>
                                    </div>
                                    <div className='form-info'>
                                        <div className='form-group row align-items-center mb-4'>
                                            <label className='col-md-2' htmlFor='fullname'>Họ và tên</label>
                                            <div className='col-md-10'><input type='text' placeholder='Fullname' name='fullname' id='fullname' className='form-control'></input></div>
                                        </div>
                                        <div className='form-group row align-items-center mb-4'>
                                            <label className='col-md-2' htmlFor='phone'>SĐT</label>
                                            <div className='col-md-10'><input type='text' placeholder='Số điện thoại' name='phone' id='phone' className='form-control'></input></div>
                                        </div>
                                        <div className='form-group row align-items-center mb-4'>
                                            <label className='col-md-2' htmlFor='adrress'>Địa chỉ</label>
                                            <div className='col-md-10'><input type='text' placeholder='Địa chỉ' name='address' id='adrress' className='form-control'></input></div>
                                        </div>
                                        <div className='form-group row align-items-center mb-4'>
                                            <label className='col-md-2' htmlFor='gender'>Giới tính</label>
                                            <div className='col-md-10'>
                                                <div className='d-flex justify-content-between align-items-center gap-5'>
                                                    {/* <input type='text' placeholder='Giới tính' name='gender' id='gender' className='form-control w-25'></input> */}
                                                    <select class="w-25 form-select" id="gender">
                                                        <option value='Male'>Nam</option>
                                                        <option value="Female">Nữ</option>
                                                    </select>

                                                    <div className='d-flex align-items-center w-75'>
                                                        <label className='w-25' htmlFor='DOB'>Ngày sinh</label>
                                                        <div className='w-75'><input type='date' placeholder='Ngày sinh' name='dob' id='DOB' className='form-control'></input></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='profile-title'>
                                        Thông tin bảo mật
                                    </div>
                                    <div className='form-group row align-items-center mb-4 mt-4'>
                                        <label className='col-md-2' htmlFor='email'>Email</label>
                                        <div className='col-md-10'><input type='email' placeholder='Email' name='email' id='email' className='form-control'></input></div>
                                    </div>
                                    <div className='text-center'>
                                        <button type='submit' className='text-center btn btn-bg-primary text-white'>Lưu thay đổi</button>
                                    </div>
                                </form>


                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Profile