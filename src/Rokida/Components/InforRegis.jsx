import React, { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import userApi from "Rokida/api/userApi";
import logosmall from '../images/logo-small.png';
// import { faPhoneSlash } from "@fortawesome/free-solid-svg-icons";
import { login } from "Rokida/slices/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const InforRegis = () => {
    const dispatch = useDispatch();

    const [first_name, setFirstName] = useState({ value: '', isWrong: false });
    const [last_name, setLastName] = useState({ value: '', isWrong: false });
    const [phone, setPhone] = useState({ value: '', isWrong: false });
    const [password, setPassword] = useState({ value: '', isWrong: false });
    const [passwordConfirmation, setPasswordConfirmation] = useState({ value: '', isWrong: false });
    const [mail, setMail] = useState({ value: '', isWrong: false });
    const [loginValidation, setLoginValidation] = useState({});
    const history = useHistory();

    const onRegister = async (event) => {
        event.preventDefault();
        
        const newUser = {
            first_name: first_name.value,
            last_name: last_name.value,
            phone: phone.value,
            email: mail.value,
            passwords: password.value,
        };

        // require input
        if (!newUser.first_name || newUser.first_name === "")
            setFirstName({ ...first_name, isWrong: true, wrongMessage: "This field is required!" });
        if (!newUser.last_name || newUser.last_name === "")
            setLastName({ ...last_name, isWrong: true, wrongMessage: "This field is required!" });
        if (!newUser.phone || newUser.phone === "")
            setPhone({ ...phone, isWrong: true, wrongMessage: "This field is required!" });
        if (!newUser.email || newUser.email === "")
            setMail({ ...mail, isWrong: true, wrongMessage: "This field is required!" });
        if (!newUser.passwords || newUser.passwords === "")
            setPassword({ ...password, isWrong: true, wrongMessage: "This field is required!" });
        if (passwordConfirmation.value !== newUser.passwords)
            setPasswordConfirmation({ ...password, isWrong: true, wrongMessage: 'Passwords dont match.' });
        
        if (!(  phone.isWrong||
                first_name.isWrong||
                last_name.isWrong||
                mail.isWrong||
                password.isWrong||
                passwordConfirmation.isWrong)
            ) {
                try {
                    //call api
                    const register = await userApi.register(newUser);

                    if(register.success){
                        const params = {
                            phone: register.data.phone,
                            passwords: password.value
                        };

                        const action = login(params);
                        const resultAction = await dispatch(action);
                        const user = unwrapResult(resultAction);
                        if (user.id) history.push("/");
                    }
                } catch (error) {
                    setLoginValidation({ isWrong: true, wrongMessage: error.message })
                    setPassword({ value: "", isWrong: false, wrongMessage: "" });
                    setPasswordConfirmation({ value: "", isWrong: false, wrongMessage: "" });
                }
                
            }
    }

    return (
        <>
            <Container fluid="true">
                <Row className="">
                    <Container>
                        <h4 className="mt-4">
                            <img src={logosmall} alt="" className="mr-2" />
                            <span style={{ position: "relative", top: "2px", marginLeft: "1px" }}>ĐĂNG KÝ</span>
                        </h4>
                        <Row className="bg_registration">
                            <Col md={{ span: 6, offset: 6 }} className="text-center">
                                <form className="about-form">
                                    <Col>

                                        <ul className="input-infor">

                                            <li><input type="text" placeholder="Tên của bạn" onBlur={
                                                (event) => {
                                                    const value = event.target.value;
                                                    if (value) {
                                                        if (value.length < 3) {
                                                            setFirstName({ ...first_name, isWrong: true, wrongMessage: 'Please enter valid username.' });
                                                        } else {
                                                            setFirstName({ ...first_name, value: value, isWrong: false });
                                                        }
                                                    }
                                                }
                                            } />
                                            </li>
                                            {first_name.isWrong && <span>{first_name.wrongMessage}</span>}

                                            <li><input type="text" placeholder="Họ của bạn" onBlur={
                                                (event) => {
                                                    const value = event.target.value;
                                                    if (value) {
                                                        if (value.length < 3) {
                                                            setLastName({ ...last_name, isWrong: true, wrongMessage: 'Please enter valid username.' });
                                                        } else {
                                                            setLastName({ ...last_name, value: value, isWrong: false });
                                                        }
                                                    }
                                                }
                                            } />
                                            </li>
                                            {last_name.isWrong && <span>{last_name.wrongMessage}</span>}

                                            <li><input type="text" placeholder="Số điện thoại" onBlur={
                                                (event) => {
                                                    const value = event.target.value;
                                                    if (value) {
                                                        const regex = /^\d{10,11}$/;
                                                        if (!regex.test(value)) {
                                                            setPhone({ ...phone, isWrong: true, wrongMessage: 'Please enter valid phone number.' });
                                                        } else {
                                                            setPhone({ ...phone, value: value, isWrong: false });
                                                        }
                                                    }
                                                }
                                            } />
                                            </li>
                                            {phone.isWrong && <span>{phone.wrongMessage}</span>}

                                            <li><input type="text" placeholder="Email" onBlur={
                                                (event) => {
                                                    const value = event.target.value;
                                                    if (value) {
                                                        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                        if (!regex.test(value)) {
                                                            setMail({ ...mail, isWrong: true, wrongMessage: 'Please enter valid email address.' });
                                                        } else {
                                                            setMail({ ...mail, value: value, isWrong: false });
                                                        }
                                                    }
                                                }
                                            } />
                                            </li>
                                            {mail.isWrong && <span>{mail.wrongMessage}</span>}

                                            <li><input type="password" placeholder="Mật khẩu" value={password.value}
                                            onChange={(event)=>{
                                                setPassword({...password, value: event.target.value});
                                            }}

                                            onBlur={
                                                (event) => {
                                                    const value = event.target.value;
                                                    if (value) {
                                                        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                                                        if (!regex.test(value)) {
                                                            setPassword({ ...password, isWrong: true, wrongMessage: 'A password contains at least 8 characters, including at least one number and includes both lower and uppercase letters and special characters.' });
                                                        } else {
                                                            setPassword({ ...password, value: value, isWrong: false });
                                                        }
                                                    }
                                                }
                                            } />
                                            </li>
                                            {password.isWrong && <span>{password.wrongMessage}</span>}

                                            <li><input type="password" placeholder="Nhập lại mật khẩu" 
                                            
                                            value={passwordConfirmation.value}
                                            onChange={(event)=>{
                                                setPasswordConfirmation({...passwordConfirmation, value: event.target.value});
                                            }}
                                            
                                            onBlur={
                                                (event) => {
                                                    if(event.target.value !== password.value)
                                                        setPasswordConfirmation({...passwordConfirmation, isWrong: true, wrongMessage: 'Passwords dont match.' }) 
                                                    else 
                                                        setPasswordConfirmation({...passwordConfirmation, isWrong: false});
                                                }
                                            } />
                                            </li>
                                            {passwordConfirmation.isWrong && <span>{passwordConfirmation.wrongMessage}</span>}

                                            <li><button className="btn btn-primary" onClick={onRegister}>Register</button></li>
                                            {loginValidation.isWrong && <span>{loginValidation.wrongMessage}</span>}
                                        </ul>

                                    </Col>
                                    <Col>
                                        <p>Bằng việc đăng ký bạn đã đồng ý cùng Rokida về<Link to="/" className="ml-2">điều khoản dịch vụ </Link>và<Link to="/" className="ml-2">chính sách bảo mật</Link> </p>
                                    </Col>
                                    <Col>
                                        <p>Bạn đã có tài khoản |<Link to="/Login" className="ml-2">Đăng nhập</Link> </p>
                                    </Col>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    )
}
export default React.memo(InforRegis)