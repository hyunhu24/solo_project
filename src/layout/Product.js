import React, { useEffect, useContext } from "react";
import ProductAll from "../components/ProductAll";
import styled from "styled-components";
import banner from "../img/banner.png";
import TabMenu from "../components/TabMenu";
import { images } from "../data/data";
import { useSearchParams } from "react-router-dom";
import { CategoryContext } from "../context/CategoryContext";



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
    const [searchParams] = useSearchParams();
    const { category, setCategory } = useContext(CategoryContext);
    console.log("Header Category:", category);
    // URL 쿼리 파라미터에서 카테고리를 읽어와 설정
    useEffect(() => {
      const categoryFromUrl = searchParams.get("category") || "All";
      if (category !== categoryFromUrl) {
        setCategory(categoryFromUrl);
      }
    }, []);
  
    return (
      <>
        <ProductContainer>
          <div className="bannerImg">
            <img src={banner} alt="배너" />
          </div>
          <TabMenu category={category} setCategory={setCategory} />
          <div className="productContain">
            <ProductAll images={images} category={category} />
          </div>
        </ProductContainer>
      </>
    );
  };

export default Product;