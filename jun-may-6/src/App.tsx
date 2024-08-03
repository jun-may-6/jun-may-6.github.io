import React, { useEffect, useState } from 'react';
import './App.css';
import { useTheme } from './ThemeContext';

const App: React.FC = () => {
  const {theme, toggleTheme} = useTheme();
  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log(newTheme)
    toggleTheme(newTheme);
  };

  return (
    <div className={theme}>
      <div>
        깃 페이지 브랜치 테스트
      </div>
      <button onClick={handleThemeChange}>다크모드 테스트</button>
    </div>
  );
}

export default App;
