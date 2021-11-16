// import Banner from "./Banner";
// import MainSlider from "./MainSlider";
// import SecondSlider from "./SecondSlider";
// import Newsbar from "./Newsbar";
// import Sidebar from "./Sidebar";
// import React, { useLayoutEffect } from "react";
// import {
//   // eslint-disable-next-line
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   useLocation,
// } from "react-router-dom";
// import Category from "./Category";

// const Homepage = () => {
//   const location = useLocation();
//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);
//   return (
//     <div className="mainContainer">
//       <Switch>
//         <Route exact path="/">
//           <Banner />
//           <MainSlider />
//           <div className="twoColumnsDiv">
//             <Newsbar />
//             <Sidebar />
//           </div>
//           <Banner />
//           <SecondSlider />
//         </Route>
//         <Route exact path="/category">
//           <Banner />
//           <MainSlider />
//           <div className="twoColumnsDiv">
//             <Category />
//             <Sidebar />
//           </div>
//         </Route>
//         <Route exact path="/single">
//           <Banner />
//           <div className="twoColumnsDiv">
//             <div>dwerefewv</div>
//             <Sidebar />
//           </div>
//         </Route>
//       </Switch>
//     </div>
//   );
// };

// export default Homepage;
