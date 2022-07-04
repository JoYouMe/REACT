import React from "react";
import { Navigate } from "react-router-dom";

const Mypage = () => {
  const isLogged = true;

  if (!isLogged) {
    //isLogged 가 false면
    return <Navigate to="/login" />;
  }

  return <div>마이페이지</div>;
};

export default Mypage;
