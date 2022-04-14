import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ChildComponent() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    console.log(theme)
    return (
        <div>
        <p>Child component</p>
        <button style={theme} onClick={toggleTheme}>Toggle theme</button>
        </div>
    )
}