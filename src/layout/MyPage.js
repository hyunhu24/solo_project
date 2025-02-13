import { useQuery } from '@tanstack/react-query';
import React from 'react';
import * as userService from '../service/userService'

const MyPage = () => {
    const { data : user , isLoading } = useQuery({
        queryKey:['user'],
        queryFn: userService.getCurrentUser
    })

    console.log(user.data)

    const userData = user.data;

  return (
    <div style={{marginTop:"150px"}}>
      <h1>{userData.name} 님 환영합니다!</h1>
      <h1>{userData.name} 님의 이메일은 {userData.email} 입니다!</h1>
      <h1>{userData.name} 님의 핸드폰 번호는 {userData.phone} 입니다!</h1>
    </div>
  );
};

export default MyPage;