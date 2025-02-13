import { useMutation } from "@tanstack/react-query";
import React from "react";
import * as userService from '../service/userService';
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export const Login = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const loginMutation = useMutation({
        mutationFn: userService.LoginUser,
        onSuccess: (data) => {
            console.log(data.user);
            queryClient.setQueryData(['user'], data.user); // 'user' 쿼리 키에 데이터 설정
            queryClient.invalidateQueries(['user']);
            alert("로그인 성공!");
            navigate('/');
        },
        onError: () => {
            alert("로그인 실패!!!!")
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log("<Login> formData : " , formData);
        const data = Object.fromEntries(formData);
        console.log("<Login> data : " , data);
        loginMutation.mutate(data);
    }

    return(
        <form onSubmit={handleSubmit} style={{marginTop:"150px"}}>
            <input name="email" type="email" placeholder="이메일" required />
            <input name="password" type="password" placeholder="비밀번호" required />
            <button type="submit">로그인</button>
        </form>
    )
}