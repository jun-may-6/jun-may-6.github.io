import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';

/* 타입 선언 */
interface ThemeContextType {
    theme: string;
    toggleTheme: (theme: string) => void;
}

/* Provider 없을 경우 대비하여 초기값 설정 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string | null>(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const localTheme: string | null = localStorage.getItem('theme');
        if (localTheme != null) {
            setTheme(localTheme);
        } else {
            const isDarkMode: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (isDarkMode) {
                setTheme('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                setTheme('light');
                localStorage.setItem('theme', 'light');
            }
        }
    }, []);

    useEffect(() => {
        if (theme !== null) {
            const root: HTMLElement = document.documentElement;
            root.className = '';
            root.classList.add(theme);
            
            if (isFirstRender.current) {
                isFirstRender.current = false;
            } else {
                document.body.classList.add('bg-transition');
            }
        }
    }, [theme]);

    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // 변경된 테마를 로컬 저장소에 저장
    };

    return (
        theme ? (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        ) : null
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('ThemeProvider 범위 밖입니다.');
    }
    return context;
};
