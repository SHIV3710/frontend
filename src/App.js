import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Display } from './Pages/Display';
import { SortbyPriority } from './Pages/SortbyPriority';
import { SortbyUser } from './Pages/SortbyUser';
import { Avatar } from './Components/Avatar';
import { Single } from './Components/Single';
import { MainPAge } from './Pages/MainPAge';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPAge/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
