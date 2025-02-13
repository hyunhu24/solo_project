import React from "react";
import Item from "./Item";
import styled from "styled-components"
import { Link } from "react-router-dom";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    .noProduct{
        width: 100%;
        text-align: center;
        padding: 50px 0;
        font-weight: bold;
    }
`
export const ContainerName = styled.div`
    font-size: 18px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 800px;
    padding: 10px;
    box-sizing: border-box;
    gap: 10px;
    span.circle{
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background-color: #F79800;
    }
`
const ProductAll = ({images, category}) => {
    const countCate = category === "All" ? images : images.filter(el => el.category === category);

    return(
        <>
            <ProductContainer>
                <ContainerName>
                    <span className="circle"></span>
                    {category} Product ({countCate.length})
                </ContainerName>
                { countCate.length < 1 
                    ? <div className="noProduct">등록된 상품이 없습니다.</div> 
                    : <Item images={countCate} /> }
            </ProductContainer>
        </>
    )
};

export default ProductAll;