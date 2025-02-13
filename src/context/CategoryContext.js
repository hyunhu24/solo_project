import React, { createContext, useState } from "react";

// Context 생성
export const CategoryContext = createContext();

// Provider 컴포넌트
export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("All"); // 초기값 설정

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};


// import React, { createContext, useState } from "react";

// export const CategoryContext = createContext();

// // 카테고리 상태와 업데이트 전역 관리 위해 생성성
// export const CategoryProvider = ({children}) => {
//     const [category, setCategory] = useState("All");

//     return(
//         <CategoryContext.Provider value={{category, setCategory}}>
//             {children}
//         </CategoryContext.Provider>
//     )
// }