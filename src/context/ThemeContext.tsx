import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextTypes {
  isDark: boolean;
  setIsDark: Dispatch<React.SetStateAction<boolean>>;
}
type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext({} as ThemeContextTypes);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const currentTheme = localStorage.getItem("noteSyncTheme");
  const [isDark, setIsDark] = useState(currentTheme === "dark")
  useEffect(() => {
    const newTheme: string = isDark ? "dark" : "light";
    localStorage.setItem("noteSyncTheme", newTheme);

  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => {
  return useContext(ThemeContext);
};

export { useTheme, ThemeProvider };
