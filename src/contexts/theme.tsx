import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { dark, light} from '../style/themes';

type ThemeProps = {
  title: string;
  colors: {
    white: string;
    background: string;
    purple: string;
    cardBg: string;
  }
};
interface ThemeContextData {
  theme: ThemeProps;
  ToggleTheme(): void;
}

const ThemeContext = createContext({} as ThemeContextData);

export const ThemesProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeProps>(light);

  useEffect(() => {
    const themeLocal = localStorage.getItem('@LetMeAsk:theme');

    setTheme(themeLocal === 'light' ? light : dark);
  }, []);

  const ToggleTheme = () => {
    if (theme.title === 'light') {
      localStorage.setItem('@LetMeAsk:theme', dark.title);
      setTheme(dark);
    } else {
      localStorage.setItem('@LetMeAsk:theme', light.title);
      setTheme(light);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }} >
      <ThemeProvider theme={theme}>
        <Container>
          {children}
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}

const Container = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
`;