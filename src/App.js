import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import DogList from './DogList';
import dogs from './DogsData';
import Dog from './Dog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        {dogs.map((dog) => (<Route path={`/dogs/${dog.name}`} element={<Dog dog={dog} />} />))}
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
