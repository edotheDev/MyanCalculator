import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {KanCalculator} from "./pages/KanCalculator/KanCalcutator.jsx";
import {P404} from "./pages/ErrorPages/P404.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<KanCalculator />} />
              <Route path="*" element={<P404 />} />
          </Routes>
      </Router>
  )
}

export default App
