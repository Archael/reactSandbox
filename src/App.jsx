import Page from './components/page';
import ThemeContextProvider from './store/context';
import { useContext } from 'react';
import { ThemeContext } from './store/context';

function App() {
  const themeColor = useContext(ThemeContext);
  return (
    <ThemeContextProvider>
      <Page themeColor={themeColor} />
    </ThemeContextProvider>
  );
}

export default App;
