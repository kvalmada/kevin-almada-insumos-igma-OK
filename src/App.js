import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}>
        </Routes>
  
      <footer>Fin</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;


