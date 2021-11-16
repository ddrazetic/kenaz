import "./styles/App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Homepage />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
