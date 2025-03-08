'use client'
import { createContext, useContext, useEffect, useState } from 'react'
interface ThemeContextType {
  darkmode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ThemeContext = createContext<ThemeContextType>({ darkmode: false, setDarkmode: () => { } });


export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkmode, setDarkmode] = useState<boolean>(
    localStorage.getItem("theme") === "dark" || false
  )

  useEffect(() => {

    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  }, [darkmode])
  return (
    <ThemeContext.Provider value={{ darkmode, setDarkmode }}>{children}</ThemeContext.Provider>
  )
}

export const useDarkmode = () => useContext(ThemeContext);