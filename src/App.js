import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSlider from "./components/MainSlider";
import SecondSlider from "./components/SecondSlider";
import Newsbar from "./components/Newsbar";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from "./components/Category";
import SingleTitle from "./components/SingleTitle";
import Singlebar from "./components/Singlebar";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="mainContainer">
          <Switch>
            <Route exact path="/">
              <Banner />
              <MainSlider />
              <div className="twoColumnsDiv">
                <Newsbar />
                <Sidebar />
              </div>
              <Banner />
              <SecondSlider />
            </Route>
            <Route exact path="/category">
              <Banner />
              <MainSlider />
              <div className="twoColumnsDiv">
                <Category />
                <Sidebar />
              </div>
            </Route>
            <Route exact path="/single">
              <Banner />
              <SingleTitle />
              <div className="twoColumnsDiv">
                <Singlebar />
                <Sidebar />
              </div>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
