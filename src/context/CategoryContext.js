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

// export const CategoryContext = createContext({
//   category: "defaultCategory", // 초기값 설정
//   setCategory: () => {},
// });

// export const CategoryProvider = ({ children }) => {
//   const [category, setCategory] = useState("defaultCategory");

//   const value = {
//     category,
//     setCategory,
//   };

//   return (
//     <CategoryContext.Provider value={value}>
//       {children}
//     </CategoryContext.Provider>
//   );
// };
