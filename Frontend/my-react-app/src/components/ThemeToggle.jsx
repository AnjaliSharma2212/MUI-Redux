import { useTheme } from "../context/ThemeContext"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <>
            <button onClick={toggleTheme}
                className="px-4 py-2 rounded-lg 
                bg-white text-white dark:bg-white
                dark:bg-white dark:text-black 
                transition-all duration-300">
                {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            </button>
        </>
    )
}
export default ThemeToggle