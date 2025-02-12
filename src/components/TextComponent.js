import React from "react";
import styled from "styled-components";

export const TextBox = styled.div`
    font-size: 14px;
    font-weight: bolder;
    line-height: normal;
    color: #292929;
    p{
        font-size: 10px;
        font-weight: 400;
        color: #808080;
    }
`

const TextComponent = ({korName,engName}) => {
    return(
        <TextBox>
            <div>{korName}</div>
            <p>{engName}</p>
        </TextBox>
    )
}

export default TextComponent;