import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./layout/Product";
import MyPage from "./layout/MyPage";
import Post from "./layout/Post";
import ItemDetail from "./components/ItemDetail";
import { CategoryProvider } from "./context/CategoryContext"; // Context 추가
import {Register} from "./layout/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Login } from "./layout/Login";
import axios from "axios";
import { useEffect } from "react";
import * as userService from './service/userService';
import ProtectedRoute from "./roleRoute/ProtectedRoute";

export const Container = styled.div`
  text-align: center;
`;

const queryClient = new QueryClient();

function App() {
  console.log(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Router>
          <CategoryProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/mypage" element={
                <ProtectedRoute allowedRoles={["USER"]}>
                  <MyPage />
                </ProtectedRoute>
                } />
              <Route path="/post" element={<Post />} />
              <Route path="/register" element={<Register/>} />
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
