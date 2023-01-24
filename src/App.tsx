import './App.scss';
import SearchPage from './SearchPage';
import Pizza from './Recipes/Pizza';
import Cake from './Recipes/Cake';
import { Route, Routes } from "react-router-dom";
import Home from './Home';

function App() {
 
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search"/>
    <Route path="/search/:id" element={<SearchPage />}/>
    <Route path="/search/pizza" element={<Pizza />}/>
    <Route path={"/search/cake"} element={<Cake />}/>
    </Routes>
  );
}

export default App;
