import { useTheme } from '../../contexts/theme';

import { Container } from './styles';

type ThemeButtonProps = {
  breakOn600?: boolean
  absolute?: boolean
}

export function ThemeButton({ absolute, breakOn600 }: ThemeButtonProps) {
  const { theme, ToggleTheme } = useTheme();

  return (
    <Container type="button" onClick={ToggleTheme} absolute={absolute} breakOn600={breakOn600}>
      {theme.title === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="12" cy="12" r="4" />
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>
      )}
    </Container>
  );
}