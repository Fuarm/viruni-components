import { CustomSlider } from './components/Slider/CustomSlider';
import { StyledEngineProvider } from '@mui/material'
import './App.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CustomSlider />
    </StyledEngineProvider>
  );
}

export default App;
