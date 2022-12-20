import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/create' element={<Add/>}/>
           <Route path='/edit' element={<Edit/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
