import React, { useContext } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Product from "./layout/Product";
import MyPage from "./layout/MyPage";
import Post from "./layout/Post";
import ItemDetail from "./components/ItemDetail";
import { CategoryProvider, CategoryContext } from "./context/CategoryContext"; // Context 추가
import { Register } from "./layout/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Login } from "./layout/Login";
import axios from "axios";
import { useEffect } from "react";
import * as userService from "./service/userService";
import ProtectedRoute from "./roleRoute/ProtectedRoute";
import PostWrite from "./layout/PostWrite";
import PostDetail from "./layout/PostDetail";

export const Container = styled.div`
  text-align: center;
`;

const queryClient = new QueryClient();

function App() {
  // useContext
  // const { category } = useContext(CategoryContext);
  // console.log(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Router>
          <CategoryProvider>
            <Header />
            <Routes>
              <Route path={`/`} element={<Product />} />
              <Route
                path="/mypage"
                element={
                  <ProtectedRoute allowedRoles={["USER"]}>
                    <MyPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/post" element={<Post />} />
              <Route path="/post/detail/:questionId" element={<PostDetail />} />
              <Route path="/post/write" element={<PostWrite />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/detail/:id" element={<ItemDetail />} />
            </Routes>
            <Footer />
          </CategoryProvider>
        </Router>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
