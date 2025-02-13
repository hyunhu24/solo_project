import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import * as userService from '../service/userService';

export const Register = () => {
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: userService.registerUser,
    onSuccess: (data) => {
      console.log('Registration successful:', data);
      alert("회원가입이 완료되었습니다. 로그인해주세요.");
      navigate("/login");
    },
    onError: (error) => {
      console.error("회원가입 실패:", error.response?.data || error.message);
      alert("회원가입 실패! 다시 시도해주세요.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Submitting data:', data);
    registerMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit} style={{marginTop:"150px"}}>
        <input name="email" type="email" placeholder="이메일" required />
        <input name="password" type="password" placeholder="비밀번호" required />
        <input name="name" type="text" placeholder="닉네임" required />
        <input name="phone" type="text" placeholder="전화번호" required />
        <button type="submit">회원가입</button>
    </form>
  );
}
