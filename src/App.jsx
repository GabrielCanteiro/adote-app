
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import GlobalStyle from './styles'

import { Opening } from "./pages/opening";
import { Login } from "./pages/login";


function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
     <Route path="/" element={<Opening />} />
     <Route path="/login" element={<Login />} />
     </Routes >
    </Router>
  );
}

export default App;