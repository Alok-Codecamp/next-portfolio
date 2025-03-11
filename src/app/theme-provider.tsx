'use client'
import { createContext, useContext, useEffect, useState } from 'react'
interface ThemeContextType {
  darkmode: boolean;
  toggleDarkmode: () => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // localStorage.getItem("theme") === "dark" || false

  const [darkmode, setDarkmode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkmode(storedTheme === "dark");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [])

  const toggleDarkmode = () => {
    const newTheme = darkmode ? "light" : "dark";
    setDarkmode(!darkmode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !darkmode);
  };
  return (
    <ThemeContext.Provider value={{ darkmode, toggleDarkmode }}>{children}</ThemeContext.Provider>
  )
}

export const useDarkmode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
