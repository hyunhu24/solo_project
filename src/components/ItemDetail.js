import React from "react";
import TextComponent from "./TextComponent";
import styled from "styled-components";
import InfoMessage from "./InfoMessage";
import { images } from "../data/data";
import { useParams } from "react-router-dom";
import { ProductContainer } from "../layout/Product";
import banner from "../img/banner.png";
import TabMenu from "../components/TabMenu";

import { useSearchParams } from "react-router-dom";


export const ItemDetailContainer = styled.div`
    /* border: 1px solid #000; */
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 800px;
    margin: auto;
`

const ItemDetail = () => {
    console.log(images);

    // const [searchParams] = useSearchParams();
    // const id = searchParams.get('id');

    const { id } = useParams();
    const image = images.find(el => el.id === parseInt(id));

    return(
        <ProductContainer>
        <div className="bannerImg">
            <img src={banner}/>
        </div>
        {/* <TabMenu category={category} setCategory={setCategory}/> */}
        <div className="productContain">
            <ItemDetailContainer>
                <>
                    <TextComponent korName={image.korName} engName={image.engName}/>
                    <img src={image.src}/>
                    <p>{image.description}</p>
                </>
                <InfoMessage/>
            </ItemDetailContainer>
        </div>
    </ProductContainer>

        
    );
}

export default ItemDetail;