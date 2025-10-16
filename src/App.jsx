import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import MealInfo from './components/MealInfo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:mealid' element={ <MealInfo /> } />
    </Routes>
    
  );
}

export default App;
