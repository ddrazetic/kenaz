import "./styles/App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
