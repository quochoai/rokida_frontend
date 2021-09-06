import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { register } from "Rokida/slices/userSlice";
import RegisterForm from "../RegisterForm";

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      console.log("New user: ", user);
      // history.push("/Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <RegisterForm handleSubmit={handleSubmit} />
    </>
  );
}

export default Register;
