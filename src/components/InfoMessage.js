import React, { useState } from "react";
import styled from "styled-components";
import { TiPlus,TiMinus } from "react-icons/ti";

export const InfoMessageContainer = styled.div`
    width: 100%;
    
    .infoTitleBox{
        border-bottom: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button{
            margin-top: 2px;
            background-color: transparent;
            outline: none;
            border:none;
            cursor: pointer;
            font-size: 20px;
        }
    }
    .infoMessage{
        display: none;
        transition: all 0.5s linear;
    }
    .infoMessage.active{
        display: block;
        transition: all 0.5s linear;
    }
`

const InfoMessage = () => {
    const [isOpen , setIsOpen] = useState(false);

    const isOpenHandler = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    

    return(
        <>
            <InfoMessageContainer>
                <div className="infoTitleBox">
                    <span>영양정보</span>
                    <button onClick={isOpenHandler}>
                        {isOpen ? <TiPlus/> : <TiMinus/>}
                    </button>
                </div>
                <div className={isOpen ? "infoMessage" : "infoMessage active"}>aaaaaaaaaaaaaaaaa</div>
            </InfoMessageContainer>
        </>
    )
}

export default InfoMessage;