import React, { useState } from "react";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";

export const TabContainer = styled.div`
    /* display: flex; */
    border-bottom: 1px solid #E7E7E7;
    width: 100%;
    margin-bottom: 10px;
    ul{
        margin: auto;
        max-width: 800px;
        display: flex;
        padding: 20px 15px 0;
        gap: 5px;
        li{
            cursor: pointer;
            padding: 10px 15px;
            transition: all 0.05s linear;
        }
        li.active{
            font-weight: bold;
            border-bottom: 1px solid #F79800;
        }
        li:hover{
            border-bottom: 1px solid #F79800;
        }
    }
`

const TabMenu = ({ category, setCategory }) => {
    const categories = ["All", "Coffee", "Burger", "Side"];

   const categoryHandler = (cate) => {
        setCategory(cate);
        // URL 쿼리 파라미터 업데이트
        window.history.pushState({}, "", `/?category=${cate}`);
   }

   return (
       <TabContainer>
           <ul>
               {categories.map((cate) => (
                   <li key={cate} className={category === cate ? "active" : ""} onClick={() => categoryHandler(cate)}>{cate}</li>
               ))}
           </ul>
       </TabContainer>
   );
};

export default TabMenu;