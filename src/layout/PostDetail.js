import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import * as postService from "../service/postService";

const PostDetail = () => {
  const userId = localStorage.getItem("userId");
  const { questionId } = useParams();
  // const { userEmail } = localStorage.getItem("userEmail");
  // const visitedKey = `visited_${id}_${userEmail}`;

  const { data: question, isLoading } = useQuery({
    queryKey: ["question", questionId],
    queryFn: () => postService.getQuestionDetail(questionId),
  });

  const quest = question?.data; // 옵셔널 체이닝 적용
  const isOwner = quest?.userId === parseInt(userId); // 게시물 소유자인지 확인

  console.log(quest, isOwner);

  // const quest = question;

  // useEffect(() => {
  //    로컬 스토리지에 방문 기록이 없으면 조회수 증가
  //   if (!localStorage.getItem(visitedKey)) {
  //     postService.incrementViewCount(id);
  //    방문 기록 저장
  //     localStorage.setItem(visitedKey, "true");
  //   }
  // }, [id, userEmail, visitedKey]);

  // const quest = question.find((el) => el.questionId === parseInt(questionId));

  // console.log(question.find((el) => el.questionId === parseInt(questionId)));
  // console.log({ quest });
  if (isLoading) return <>로딩중...</>;

  return (
    <div style={{ marginTop: "200px" }}>
      {quest && (
        <div>
          <h1>{quest.title}</h1>
          <p>{quest.content}</p>
          <p>조회수: {quest.views}</p>
          {isOwner && (
            <>
              <button>수정하기</button>
              <button>삭제하기</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PostDetail;
