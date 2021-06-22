import { ThemesProvider } from './theme';
import { AuthProvider } from './auth';

export const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ThemesProvider>
      {children}
    </ThemesProvider>
  </AuthProvider>
)
