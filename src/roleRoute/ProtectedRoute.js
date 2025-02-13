import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import * as userService from "../service/userService";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: userService.getCurrentUser,
    staleTime: Infinity,
  });

 

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  const hasAllowedRole = user && user.data && user.data.roles && user.data.roles.some(role => allowedRoles.includes(role)) && user.data.roles.find(role => role === "ADMIN") !== "ADMIN";

  console.log(user.data.roles.find(role => role === "ADMIN") !== "ADMIN");
  if (!hasAllowedRole) {
    console.log("User roles:", user ? user.data.roles : "No user data");
    return (
      <>
        <h1>접근권한이 없습니다!!</h1>
        <h1>회원만 접근 가능!!!!!</h1>
        <Link to="/"><button type="button">홈으로 돌아가기</button></Link>
      </>
    );
  }

//   if (!user || !allowedRoles.includes(user.data.roles)) {
//     // 로그인되지 않았거나 허용된 역할이 아닌 경우 리다이렉트
//     console.log(user.data.roles)
//     return(
//      <>
//         <h1>접근권한이 없습니다!!</h1>
//         <h1>회원만 접근 가능!!!!!</h1>
//         <Link to={"/"}><button type="button">홈으로 돌아가기기</button></Link>
        
//     </>);
//   }

  return children;
};

export default ProtectedRoute;
