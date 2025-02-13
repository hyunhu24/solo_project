import React, { useContext, useEffect } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CategoryContext } from "../context/CategoryContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as userService from '../service/userService';
import axios from "axios";

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
  const { category } = useContext(CategoryContext);
  // const queryClient = useQueryClient();

  // const { data: user, isLoading, isError } = useQuery({
  //   queryKey: ['user'],
  //   queryFn: userService.getCurrentUser, // 현재 사용자 정보를 가져오는 함수
  //   staleTime: Infinity, // 사용자 정보가 변경되지 않는 한 캐시 유지
  // });

  // const onLogout = () => {
  //   // 로그아웃 처리
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userId");
  //   delete axios.defaults.headers.common["Authorization"];

  //   queryClient.removeQueries('user');
  // };

  const queryClient = useQueryClient();

  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: userService.getCurrentUser,
    staleTime: 0,
    refetchOnWindowFocus: true
  });

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    delete axios.defaults.headers.common["Authorization"];
    queryClient.invalidateQueries(['user']);
  };

  console.log(user);
  return (
    <HeaderContainer>
      <div className="arrowBox">
        {/* 현재 카테고리를 유지하며 홈으로 이동 */}
        <Link to={`/?category=${category}`}>
          <MdKeyboardBackspace className="arrow" />
        </Link>
        <ul>
          {user ?
            <>
            <Link to={"/"}><li onClick={onLogout} style={{ cursor: "pointer" }}>로그아웃</li></Link>
            <Link to="/post"><li>게시판</li></Link>
            <Link to="/mypage"><li>마이페이지</li></Link>
            </>
          : 
          (
            <>
            <Link to="/login"><li>로그인</li></Link>
            <Link to="/register"><li>회원가입</li></Link>
            </>
          )
          
          }
          
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
