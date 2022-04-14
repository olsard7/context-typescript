import * as React from 'react';
import {useState} from 'react';
import ThemeContext, {themes, Theme} from './ThemeContext';
import ChildComponent from './ChildComponent';

type State = {
  theme: Theme
}

function App()                                                                                           {
  const [theme, setTheme] = useState(themes.light);
 
  const toggleTheme = () => {
    setTheme(t => t === themes.light ? themes.dark : themes.light)
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App">
      <h1>Test theme TS</h1>
      <ChildComponent />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
