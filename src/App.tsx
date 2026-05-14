
import Intro from './Intro';
import SxPropsCustomisation from './SxPropsCustomisation.tsx';
import ReusableStyledComponent from './ReusableStyledComponent.tsx';
import GlobalThemeOverrides from './GlobalThemeOverrides.tsx';
import ThemeTogglerComponent from './ThemeTogglerComponent.tsx';

function App() {

  return ( 
    <>
      <ThemeTogglerComponent />
      <GlobalThemeOverrides />
    </>
  );
}

export default App
