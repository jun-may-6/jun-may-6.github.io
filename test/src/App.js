// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

const AppContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppContainer>
        <Routes>
          <Route exact path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
