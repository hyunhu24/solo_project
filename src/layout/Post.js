import { useQuery } from '@tanstack/react-query';
import React from 'react';
import * as postService from '../service/postService'
import { Link } from 'react-router-dom';

const Post = () => {
    //유저정보 확인
    const userId = localStorage.getItem('userId');

    const { data : question , isLoading } = useQuery({
        queryKey: ['question'],
        queryFn: postService.getQuestions
    })

    console.log(question);
    // const questionData = question.data;
    // console.log(questionData);

    if(isLoading) return <h1 style={{marginTop: "200px"}}>로딩중...</h1>

  return (
    <div style={{marginTop : "150px"}}>

        { question && question.length > 0 ? 
          (
            question.map((qt) => (
                <div key={qt.questionId}>
                    {qt.visibilityStatus === 'SECRET' ? (
                        qt.userId === Number(userId) ? ( // 문자열로 저장된 userId를 숫자로 변환!!
                            <Link to={`/post/detail/${qt.questionId}`}>
                                <span>{qt.questionId}</span>
                                <h1>{qt.title}</h1>
                                <p>{qt.content}</p>
                            </Link>
                        ) : (
                            <>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                <path fill="#424242" d="M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6v4h4v-4C34,8.5,29.5,4,24,4z"></path><path fill="#FB8C00" d="M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"></path><path fill="#C76E00" d="M24 28A3 3 0 1 0 24 34A3 3 0 1 0 24 28Z"></path>
                                </svg>
                            </div>
                            <p>비밀글입니다.</p>
                            </>
                        )
                    ) : (
                        <Link to={`/post/detail/${qt.questionId}`}>
                                <span>{qt.questionId}</span>
                                <h1>{qt.title}</h1>
                                <p>{qt.content}</p>
                            </Link>
                    )}
                </div>
            ))
        )
         : (
            <>
                <h1>게시글이 없습니다</h1>
            </>
         )}
        <Link to={'/post/write'}><button type='button'>게시글 작성하기</button></Link>
     
    </div>
  );
};

export default Post;