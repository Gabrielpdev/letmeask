import { ThemesProvider } from './theme';
import { AuthProvider } from './auth';

export const AppProvider: React.FC = ({ children }) => (
  <ThemesProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </ThemesProvider>
)
