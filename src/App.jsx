import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./component/nav/Nav";
import Home from "./Pages/home/Home";
import CountryPage from "./Pages/counrty/CountryPage";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryFlag" element={<CountryPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
