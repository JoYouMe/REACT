import React from "react";
import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <ul>
      {/*Route의 children으로 들어가는 JSX 엘레먼트를 보여주는 기능*/}
      <Outlet />
      <li>
        <Link to="/articles/1">게시글 1</Link>
      </li>
      <li>
        <Link to="/articles/2">게시글 2</Link>
      </li>
      <li>
        <Link to="/articles/3">게시글 3</Link>
      </li>
    </ul>
  );
};

export default Articles;
