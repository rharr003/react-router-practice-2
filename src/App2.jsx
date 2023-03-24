
import './App.css';
import { BrowserRouter, Route, Routes, Navigate, Link} from 'react-router-dom'
import ColorList from './ColorList';
import Color from './Color';
import ColorForm from './ColorForm';
import { useState } from 'react';

function App2() {
    const [colors, setColors] = useState([]);
    function addColor(color){
        setColors(colors => [...colors, color]);
    }
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/colors/new">Add a color</Link>
      <Routes>
        <Route path="/colors/new" element={<ColorForm addColor={addColor} />} />
        <Route path="/colors" element={<ColorList colors={colors} />} />
        {colors.map(color => <Route path={`/colors/${color.name}`} element={<Color color={color} />} />)}
        <Route path="*" element={<Navigate to="/colors"/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App2;
