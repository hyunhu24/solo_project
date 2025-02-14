import axios from "axios";
import { instance } from "./userService";

export const postQuestions = async (postData) => {
  const userId = localStorage.getItem("userId");

  const response = await instance.post(`/questions/${userId}`, postData, {
    headers: {
      withCredentials: true,
    },
  });

  return response.data;
};

export const getQuestionDetail = async (questionId) => {
  try {
    const response = await instance.get(`/questions/${questionId}`);
    console.log("getQuestionDetail", response);
    return response.data;
  } catch (error) {
    console.error("getQuestionDetail 에러:", error);
    throw error;
  }
};

// export const postQuestions = async (postData) => {
//     const userId = localStorage.getItem('userId');

//     const response = await instance.post(`/questions/${userId}`, postData, {
//         headers: {
//             withCredentials: true,
//         }
//     })

//     return response.data;
// }

export const getQuestions = async () => {
  const response = await instance.get(`/questions`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data.data;
};

export const getMyQuestions = async () => {
  const response = await instance.get(`/questions/my-questions`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
