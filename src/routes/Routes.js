import '../App.css';
import Home from '../pages/Home';
import DetalheLivro from '../pages/LivroDetalhe'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function RoutesLivros() {
  return (
    <Router>
    <Routes>
            <Route element = { <Home />}  path="/" exact />
            <Route element = { <DetalheLivro /> }  path="/detalheLivro" />
    </Routes>
    </Router>
  );
}

export default RoutesLivros;