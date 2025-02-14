import { useQuery } from "@tanstack/react-query";
import React from "react";
import * as userService from "../service/userService";
import * as postService from "../service/postService";
import { Link } from "react-router-dom";

const MyPage = () => {
  const userId = localStorage.getItem("userId");

  const { data: user, isLoading: isLoading1 } = useQuery({
    queryKey: ["user"],
    queryFn: userService.getCurrentUser,
  });
  const { data: question, isLoading: isLoading2 } = useQuery({
    queryKey: ["question"],
    queryFn: postService.getQuestions,
  });

  if (isLoading1 || isLoading2)
    return <h1 style={{ marginTop: "200px" }}>로딩중...</h1>;

  const userData = user?.data; // 옵셔널 체이닝 적용

  // 현재 사용자가 작성한 게시물만 필터링
  const myQuestions = question?.filter((qt) => qt.userId === Number(userId));

  return (
    <div style={{ marginTop: "150px" }}>
      {userData && (
        <div>
          <h1>{userData.name} 님 환영합니다!</h1>
          <h1>
            {userData.name} 님의 이메일은 {userData.email} 입니다!
          </h1>
          <h1>
            {userData.name} 님의 핸드폰 번호는 {userData.phone} 입니다!
          </h1>
        </div>
      )}

      <hr />
      <div>
        <h1>내가 쓴 게시물</h1>
        {myQuestions && myQuestions.length > 0 ? (
          myQuestions.map((qt) => (
            <Link to={`/post/detail/${qt.questionId}`} key={qt.questionId}>
              <div>
                <span>{qt.questionId}</span>
                <h1>{qt.title}</h1>
                <p>{qt.content}</p>
              </div>
            </Link>
          ))
        ) : (
          <h1>게시글이 없습니다</h1>
        )}
      </div>
    </div>
  );
};

export default MyPage;
