import "./styles/App.css";
import Header from "./components/header_footer_components/Header";
import Footer from "./components/header_footer_components/Footer";
import MainSlider from "./components/slider_components/MainSlider";
import SecondSlider from "./components/slider_components/SecondSlider";
import Newsbar from "./components/homepage_components/Newsbar";
import Sidebar from "./components/sidebar_components/Sidebar";
import Banner from "./components/homepage_components/Banner";
import Category from "./components/category_components/Category";
import SingleTitle from "./components/single_components/SingleTitle";
import Singlebar from "./components/single_components/Singlebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
