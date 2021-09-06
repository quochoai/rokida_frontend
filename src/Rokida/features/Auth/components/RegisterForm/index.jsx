// import PropTypes from "prop-types";
// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logosmall from "Rokida/images/logo-small.png";
// import apple from "Rokida/images/logo/apple.png";
// import facebook from "Rokida/images/logo/facebook.png";
// import google from "Rokida/images/logo/google.png";

// RegisterForm.propTypes = {
//   handleSubmit: PropTypes.func,
// };

// function RegisterForm(props) {
//   const { handleSubmit } = props;
//   const [first_name, setFirstName] = useState("");
//   const [last_name, setLastName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [mail, setMail] = useState("");

//   const onSignUpClick = (values) => {
//     // values = {
//     //   first_name: first_name,
//     //   last_name: last_name,
//     //   phone: phone,
//     //   email: mail,
//     //   passwords: password,
//     // };

//     // values = {
//     //   first_name: "first_name",
//     //   last_name: "last_name",
//     //   phone: "0123436788",
//     //   email: "mail@adf.com",
//     //   passwords: "password",
//     // };
//     if (handleSubmit) handleSubmit(values);
//   };

//   return (
//     <>
//       <Container fluid="true">
//         <Row className="">
//           <Container>
//             <h4 className="mt-4">
//               <img src={logosmall} alt="" className="mr-2" />
//               <span
//                 style={{ position: "relative", top: "2px", marginLeft: "1px" }}
//               >
//                 ĐĂNG KÝ
//               </span>
//             </h4>
//             <Row className="bg_registration">
//               <Col md={{ span: 6, offset: 6 }} className="text-center">
//                 <form className="about-form">
//                   <Col>
//                     <ul className="input-infor">
//                       <li>
//                         <input
//                           onChange={(event) => {
//                             setFirstName(event.target.value);
//                           }}
//                           type="text"
//                           placeholder="Tên"
//                         />
//                       </li>
//                       <li>
//                         <input
//                           onChange={(event) => {
//                             setLastName(event.target.value);
//                           }}
//                           type="text"
//                           placeholder="Họ"
//                         />
//                       </li>
//                       <li>
//                         <input
//                           onChange={(event) => {
//                             setPhone(event.target.value);
//                           }}
//                           type="text"
//                           placeholder="Số điện thoại"
//                         />
//                       </li>
//                       <li>
//                         <input
//                           onChange={(event) => {
//                             setMail(event.target.value);
//                           }}
//                           type="text"
//                           placeholder="Email"
//                         />
//                       </li>
//                       <li>
//                         <input
//                           onChange={(event) => {
//                             setPassword(event.target.value);
//                           }}
//                           type="password"
//                           placeholder="Mật khẩu"
//                         />
//                       </li>
//                       {/* <li><input type="password" placeholder="Nhập lại mật khẩu" /></li> */}
//                       <li>
//                         <input
//                           onClick={onSignUpClick}
//                           className="btn btn-primary"
//                           defaultValue="Sign up"
//                         />
//                       </li>
//                     </ul>
//                   </Col>
//                   <Col className="text-center ">
//                     <p>Hoặc đăng nhập với</p>
//                     <img src={facebook} alt="" />
//                     <img src={google} alt="" className="ml-2 mr-2" />
//                     <img src={apple} alt="" />
//                   </Col>
//                   <Col>
//                     <p>
//                       Bằng việc đăng ký bạn đã đồng ý cùng Rokida về
//                       <Link to="/" className="ml-2">
//                         điều khoản dịch vụ{" "}
//                       </Link>
//                       và
//                       <Link to="/" className="ml-2">
//                         chính sách bảo mật
//                       </Link>{" "}
//                     </p>
//                   </Col>
//                   <Col>
//                     <p>
//                       Bạn đã có tài khoản |
//                       <Link to="/Login" className="ml-2">
//                         Đăng nhập
//                       </Link>{" "}
//                     </p>
//                   </Col>
//                 </form>
//               </Col>
//             </Row>
//           </Container>
//         </Row>
//       </Container>
//     </>
//   );
// }
// export default RegisterForm;
