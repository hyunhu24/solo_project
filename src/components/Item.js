import React from "react";
import styled from "styled-components"
import { Link, useSearchParams } from "react-router-dom";

export const ItemBox = styled.div`
  /* border: 1px solid red; */
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  max-width: 800px;
  padding: 10px;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ItemImgBox = styled.div`
    display: flex;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    flex-direction: column;
    padding: 10px 0;
    width: calc((100% / 2) - 7px);
    height: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
    cursor: pointer;
    
    .productImg{
        margin: 0 30px;
        object-fit: contain;
    }
`;

const Item = ({images}) => {

    return(
        <ItemBox>
            {images.map((image,index) => (
                <ItemImgBox key={index}>
                    <Link to={`/detail/${image.id}`}>
                        <div> 
                            <img className="productImg" src={image.src} alt={image.alt} />
                        </div>
                        <div className="itemTitle">{image.korName}</div>
                        <div className="itemTitle">{image.engName}</div>
                    </Link>
                </ItemImgBox>
            ))}
        </ItemBox>
    )
}

export default Item;