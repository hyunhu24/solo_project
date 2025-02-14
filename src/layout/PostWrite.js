import { useMutation } from '@tanstack/react-query';
import React , {useState} from 'react';
import * as postService from '../service/postService'
import { useNavigate } from 'react-router-dom';

const PostWrite = () => {
    const navigate = useNavigate();

    const [visibilityStatus, setVisibilityStatus] = useState('PUBLIC');

    const quetionMutation = useMutation({
        mutationFn: postService.postQuestions,
        onSuccess:(data) => {
            console.log("question post Success : ", data);
            alert("게시글 등록이 완료 되었습니다");
            navigate("/post");
        },
        onError: (error) => {
            console.error("게시글작성 실패:", error.response?.data || error.message);
            alert("게시글 작성 실패! 다시 시도해주세요.");
          },
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const postData = Object.fromEntries(formData);
        postData.visibilityStatus = visibilityStatus;
        console.log("handleSubmit PostWrite : ", postData);
        quetionMutation.mutate(postData);
    }

  return (
    <form onSubmit={handleSubmit} style={{marginTop: "150px"}}>
        <label htmlFor='titleText'> title</label>    
        <input name='title' id='titleText'/>
        <br />
        <label htmlFor='contentText'>content</label>
        <input name='content' id='contentText'/>
        <br />
        <label htmlFor='visibilityCheckBox'> 비공개로 설정</label>
            <input
                name='visibilityStatus'
                type="checkbox"
                id='visibilityCheckBox'
                checked={visibilityStatus === 'SECRET'}
                onChange={(e) => setVisibilityStatus(e.target.checked ? 'SECRET' : 'PUBLIC')}
            />
            
       
        <br />
        <button type='submit'>저장하기</button>
    </form>
  );
};

export default PostWrite;