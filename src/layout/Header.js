import React from 'react';
import { MdKeyboardBackspace } from "react-icons/md";
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  background-color: #F2F2F2;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  .arrowBox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    max-width: 800px;
    padding: 10px 15px;
    margin: auto;
    .arrow {
      font-size: 20px;
      font-weight: 900;
      cursor: pointer;
    }
    ul {
      display: flex;
      gap: 12px;
    }
  }
`;

const Header = () => {
  // { user, onLogout}
  // console.log(user)
  const location = useLocation();
  console.log(location)
  console.log(location.search)


  return (
    <HeaderContainer>
      <div className="arrowBox">
          <Link to={location.search || "/"}>
              <MdKeyboardBackspace className="arrow" />
          </Link>
          <ul>
            <Link to="/login"><li>로그인</li></Link>
            <Link to="/register"><li>회원가입</li></Link>
         
          </ul>
        </div>
    </HeaderContainer>
  );
};

export default Header;


 {/* {user ? (
              <>
              <li onClick={onLogout} style={{ cursor: "pointer" }}>로그아웃</li>
              <Link to="/post"><li>게시판</li></Link>
              <Link to="/mypage"><li>마이페이지</li></Link>
              </>
          ) : (
              <>
              <Link to="/login"><li>로그인</li></Link>
              <Link to="/register"><li>회원가입</li></Link>
              </>
          )} */}