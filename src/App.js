// import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './layout/Product';
import MyPage from './layout/MyPage';
import Post from './layout/Post';
import { images } from './data/data';
import ItemDetail from './components/ItemDetail';

export const Container = styled.div`
   text-align: center;
`

function App() {

  return (
    <Container>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Product /> }/>
          <Route path='/mypage' element={<MyPage/> }/>
          <Route path='/post' element={<Post/> }/>
          <Route path='/detail/:id' element={<ItemDetail />}/>
        </Routes>
      </Router>
      <Footer/>
    </Container>
  );
}

export default App;
