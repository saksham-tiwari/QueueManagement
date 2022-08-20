import React, { useState, useEffect } from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import { useForm } from 'react-hook-form'
import image from '../../Assets/pic.svg'
import './ForgotPass.css'
import AuthService from '../../../services/API'
import { useSelector } from 'react-redux'
const ResetPass = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });
    const { pass } = useSelector((state) => state.AuthReducer);
    const onSubmit = (data, e) => {
        e.preventDefault();
        let obj = {
            "username": localStorage.getItem("emailj"),
            "password": data.passwordr1,
            "name": null,
            "mob": null,
            "gender": null,
            "role": null
        }
        AuthService.resetpass(obj)
            .then((res) => {
                console.log(res);
            }).catch((e) => {
                console.log(e);
            })
    }
    const [toggle, setToggle] = useState(false);
    const [toggle1, setToggle1] = useState(false);
    return (
        <div className='Signup-Page'>
            <div className='Navbar-Signup'>
                <Navbar />
            </div>
            <div className='middle-portion'>
                <div className='login-heading'>
                    <p>Reset Password <span className='ques'>.</span></p>
                </div>
                <form className='input-login1' onSubmit={handleSubmit(onSubmit)}>
                    <div className='passwordr1'>
                        <i id="passlock" class="fa fa-eye" aria-hidden="true"></i>
                        {
                            toggle ? <i id='passlock' class="fa fa-eye-slash" aria-hidden="true" onClick={() => { setToggle(!toggle) }}></i> : <i id="passlock" class="fa fa-eye" aria-hidden="true" onClick={() => { setToggle(!toggle) }}></i>
                        }
                        <input className='input-field' type={toggle ? "text" : "password"} placeholder='Enter New Password' name="passwordr1" {...register("passwordr1", { required: "password is required", minLength: { value: 8, message: "Password must be more than 8 characters" }, maxLength: { value: 14, message: "Password cannot exceed more than 14 characters" } })}></input>
                        <p className='alerts'>{errors.passwordr1?.message}</p>
                    </div>
                    <div className='passwordr2'>
                        <i id="passlock" class="fa fa-eye" aria-hidden="true"></i>
                        {
                            toggle1 ? <i id='passlock' class="fa fa-eye-slash" aria-hidden="true" onClick={() => { setToggle1(!toggle1) }}></i> : <i id="passlock" class="fa fa-eye" aria-hidden="true" onClick={() => { setToggle1(!toggle1) }}></i>
                        }
                        <input className='input-field' type={toggle1 ? "text" : "password"} placeholder='Renter New Password' name="passwordr2" {...register("passwordr2", { required: "password is required", minLength: { value: 8, message: "Password must be more than 8 characters" }, maxLength: { value: 14, message: "Password cannot exceed more than 14 characters" } })}></input>
                        <p className='alerts'>{errors.passwordr2?.message}</p>
                    </div>
                    <button className='sendotp-btn' type='submit'>Finish</button>
                </form>
            </div>
            <div className='queue-img'>
                <img className="pic" src={image} alt="logo" />
            </div>
        </div>
    )
}

export default ResetPass