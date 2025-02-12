import React,{useEffect, useState} from "react";
// import Top from "../components/Top.js";
import ProductAll from "../components/ProductAll";
import styled from "styled-components";
import banner from "../img/banner.png";
import TabMenu from "../components/TabMenu";
import { images } from "../data/data";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../layout/Footer";
import ItemDetail from "../components/ItemDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export const ProductContainer = styled.div`
.bannerImg{
    overflow: hidden;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
        min-height: 100%;
        object-fit: cover;
    }
}
.productContain{
    padding: 0 10px;
    margin: 0 auto;
}`

const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const navigate = useNavigate();

    const categoryParams = searchParams.get("category") || "All";
    const [category, setCategory] = useState(categoryParams);

    useEffect(() => {
        if (category !== categoryParams) {
            setSearchParams({category})
        }
    }, [category, categoryParams, setSearchParams]);

    return(
        <>
            <ProductContainer>
                <div className="bannerImg">
                    <img src={banner}/>
                </div>
                <TabMenu category={category} setCategory={setCategory}/>
                <div className="productContain">
                    <ProductAll images={images} category={category} />
                </div>
            </ProductContainer>
        </>
    );
}

export default Product;