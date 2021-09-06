import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import GoogleLogin, { useGoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { login } from "Rokida/slices/userSlice";
import logosmall from '../images/logo-small.png';
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId ='862806630258-4hjnsn98r332maq4btut58e063ce6a4s.apps.googleusercontent.com';

const InforLogin = (props) => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loginValidation, setLoginValidation] = useState({});
    const history = useHistory();
    const dispatch = useDispatch();
    
    const handleLogin = async () => {

        const params = {
            phone: phone,
            passwords: password
        };

        try {
            const action = login(params);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            if (user.id) history.push("/");
            else setLoginValidation({ isWrong: true, wrongMessage: "Wrong username or password!"});
        } catch (error) {
            setLoginValidation({ isWrong: true, wrongMessage: "Wrong username or password!"});
            console.log(error.message);
        }
  
    };

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        // alert(
        //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
        refreshTokenSetup(res);
        // history.push("/");
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
        alert(
            `Failed to login. 😢 `
        );
    };

    useEffect(() => {
        // 
    });
    return (
        <>
            <Container fluid="true">
                <Row className="">
                    <Container>
                        <h6 className="mt-4"><img src={logosmall} alt="" className="mr-2" />ĐĂNG NHẬP</h6>
                        <Row className="bg_registration">
                            <Col md={{ span: 6, offset: 6 }} className="text-center">
                                <form className="about-form">
                                    <Col>

                                        <ul className="input-infor">
                                            <li><input onChange={
                                                (event) => {
                                                    setPhone(event.target.value)
                                                }
                                            } type="text" placeholder="Số điện thoại hoặc Email" /></li>
                                            <li><input onChange={
                                                (event) => {
                                                    setPassword(event.target.value)
                                                }
                                            } type="password" placeholder="Mật khẩu" /></li>
                                            {loginValidation.isWrong && <span>{loginValidation.wrongMessage}</span>}
                                            <li><input onClick={handleLogin} className="btn btn-primary" defaultValue="Login" /></li>
                                        </ul>

                                    </Col>
                                    <Col className="text-center ">
                                        <p>Hoặc đăng nhập với</p>
                                        <GoogleLogin clientId={clientId}
                                            buttonText="Login"
                                            onSuccess={onSuccess}
                                            onFailure={onFailure}
                                            cookiePolicy={'single_host_origin'}
                                            style={{ marginTop: '100px' }}
                                            isSignedIn={true} />
                                    </Col>
                                    <Col>
                                        <p>Bằng việc đăng ký bạn đã đồng ý cùng Rokida về<Link to="/" className="ml-2">điều khoản dịch vụ </Link>và<Link to="/" className="ml-2">chính sách bảo mật</Link> </p>
                                    </Col>
                                    <Col>
                                        <p>Quên mật khẩu |<Link to="/" className="ml-2">Tạo mật khẩu mới</Link> </p>
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
export default React.memo(InforLogin)