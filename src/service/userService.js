import axios from "axios";
import {jwtDecode} from "jwt-decode";

export const instance = axios.create({
    baseURL: "http://localhost:8080/api"
});

export const registerUser = async (userData) => {
    const response = await instance.post(`/users`, userData, {
        withCredentials: true,
    });

    return response.data;
};

export const LoginUser = async (credentials) => {
    const response = await instance.post('/auth/login', credentials, {
        headers : {
            "Content-Type" : "application/json"
        }
    })

    const token = response.headers["authorization"]; // authorization
    if(token){
        localStorage.setItem("token", token);
        // 모든 Axios 요청에 자동으로 Bearer 토큰이 포함되어 서버에 전송됩니다. 이는 보안된 API 엔드포인트에 접근할 때 필요한 인증을 제공
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        //
        
        // JWT 디코딩하여 사용자 ID 추출
        // const decodedToken = jwtDecode(token);
        // console.log(decodedToken);
       

        // 모든 사용자 정보 요청
        const usersResponse = await instance.get('/users/', {
            headers: {
                Authorization : token
            }
        });
        const users = usersResponse.data.data;
        // console.log(users)

        // 로그인한 사용자의 이메일과 일치하는 사용자 찾기
        const loggedInUser = users.find(user => user.email === credentials.email);

        // console.log(loggedInUser)

        if (loggedInUser) {
            localStorage.setItem("userId", loggedInUser.userId); // userId를 localStorage에 저장
            return { user: loggedInUser, token };
        } else {
            throw new Error("사용자 정보를 찾을 수 없습니다.");
        }
    }

}

export const getCurrentUser = async () => {
    const token = localStorage.getItem('token'); // 토큰 가져오기
    const userId = localStorage.getItem('userId'); // userId 가져오기

    if (!token || !userId) {
        return null;
    }

    try {
        const response = await instance.get(`/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}` // Bearer 토큰 추가
            }
        });
        return response.data; // 사용자 정보 반환
    } catch (error) {
        console.error('Failed to get current user:', error);
        return null;
    }
};
