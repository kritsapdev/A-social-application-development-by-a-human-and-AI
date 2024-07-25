import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';


// Import your components
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewsFeed from './pages/NewsFeed';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: beige;
  }
`;

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/news-feed" element={<NewsFeed />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;