import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav, ListGroup } from 'react-bootstrap';
import { ListUser } from '../DataFake/ListProduct';
import InputEdiable from '../Components/InputEdiable';
import { Link } from 'react-router-dom';
import userApi from 'Rokida/api/userApi';
import Avatar from '@material-ui/core/Avatar';

const Information = () => {

  // const [validationMessages, setValidationMessages] = useState([]);
  const [formData, setFormData] = useState({});
  const [editMode, setEditMode] = useState(false);

  const [userInfo, setUserInfo] = useState({});

  const handleChange = (key, value) => {
    let dataForm = { ...formData };
    dataForm[key] = value;
    setFormData(dataForm);
  }

  // const handleClick = (evt) => {
  //   validateForm();
  //   if (validationMessages.length > 0) {
  //     evt.preventDefault();
  //   }
  // }

  // const validateForm = () => {
  //   const { gender } = formData;
  //   setValidationMessages([]);
  //   let messages = [];
  //   if (!gender) {
  //     messages.push("Please select a Gender");
  //   }
  //   setValidationMessages(messages);
  // }

  const updateUser = async () => {
    try {
      const updateResponse = await userApi.update({ ...formData });
      const newUser = { ...updateResponse.data };
      if (updateResponse.success) {
        setUserInfo(newUser);
        setEditMode(false);
        localStorage.setItem('user', JSON.stringify(newUser));
      }
    } catch (error) {
      console.log('Update User failure: ', error.messages);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('user')) setUserInfo(JSON.parse(localStorage.getItem('user')));
  }, []);
  return (
    <>
      <Container fluid="true">
        <Row className="bg-login">
          <Container>
            <h4 className="mt-4">Chỉnh sửa thông tin</h4>
            <Row>
              <Col md={4} >
                <Nav className="nav__right">
                  <ListGroup className="">
                    {ListUser.map((item, index) => (
                      <div className="txt_list" key={index}>
                        <Nav.Link href={item.href}>{item.name}</Nav.Link>
                      </div>
                    ))}
                  </ListGroup>
                </Nav>
              </Col>
              <Col md={8} className="user-input text-center ">
                <Avatar alt="avatar" src={userInfo.avartar} className="avatar-user" />
                <p>Xin chào, {userInfo.first_name}</p>
                <Link to="/" className="">
                  Quản lý thông tin hồ sơ bảo mật tài khoản
                </Link>
                <hr></hr>
                <ul className="text-left">
                  <li>Tên Đăng Nhập: {userInfo.first_name}</li>
                  <li><span className="mr-2">Tên:</span>
                   {editMode ? <InputEdiable
                      type="text"
                      name="last_name"
                      value={formData.last_name || userInfo.last_name}
                      onChange={(e) => handleChange('last_name', e.target.value)}
                      fullWidth={true}
                      editMode={editMode}
                    /> : userInfo.last_name}
                  </li>

                  <li><span className="mr-2">Mail:</span>
                  {editMode ? <InputEdiable
                      type="text"
                      name="email"
                      value={formData.email || userInfo.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      fullWidth={true}
                      editMode={editMode}
                    /> : userInfo.email}
                  </li>
                  <li><span className="mr-2">Số điện thoại:</span>
                  {editMode ? <InputEdiable
                      type="text"
                      name="phone"
                      value={formData.phone || userInfo.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      fullWidth={true}
                      editMode={editMode}
                    /> : userInfo.phone}
                  </li>
                  <li><span className="mr-2">Giới tính: </span>
                    {editMode ? <>
                      <input value="Male" checked={formData.gender ? formData.gender === "Male" : userInfo.gender === 'Male'}
                        onChange={(e) => handleChange('gender', e.target.value)} type="radio" name="gender" className="ml-2" />Male
                        <input value="Female" checked={formData.gender ? formData.gender === "Female" : userInfo.gender === 'Female'}
                        onChange={(e) => handleChange('gender', e.target.value)} type="radio" name="gender" className="ml-2" />Female
                        <input value="None" checked={formData.gender ? formData.gender === "None" : userInfo.gender === 'None'}
                        onChange={(e) => handleChange('gender', e.target.value)} type="radio" name="gender" className="ml-2" />Prefer not to say
                    </> : userInfo.gender}
                  </li>
                  <li><span className="mr-2">Ngày Sinh: </span>
                    {editMode 
                      ? <input type="date" name="birthday" defaultValue={formData.birthday || userInfo.birthday} className="ml-2" onChange={(e) => handleChange('birthday', e.target.value)} /> 
                      : (new Date(userInfo.birthday)).toLocaleDateString()}
                  </li>
                  <li><span className="mr-2">Địa chỉ:</span>
                  {editMode ? <InputEdiable
                      type="text"
                      name="city"
                      value={formData.city || userInfo.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      fullWidth={true}
                      editMode={editMode}
                    /> : userInfo.city}
                  </li>
                </ul>
                <input type="submit" value={editMode ? "Lưu" : "Thay Đổi"} onClick={() => !editMode ? setEditMode(true) : updateUser()} className="button"/>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
};
export default React.memo(Information);
