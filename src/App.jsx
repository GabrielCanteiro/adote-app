
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import GlobalStyle from './styles'

import { Opening } from "./pages/opening";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Home } from "./pages/Home";


function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
     <Route path="/" element={<Opening />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     <Route path="/home" element={<Home />} />
     </Routes >
    </Router>
  );
}

export default App;