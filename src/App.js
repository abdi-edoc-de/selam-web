import React from "react";
import "./static/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getIsLogin } from "./store/auth";
import LandingPage from "./pages/Landing";
import Layout from "./Layout";
const App = () => {
  const isLogedin = useSelector((state) => getIsLogin(state));
  return (
    <>
      {/* <LandingPage /> */}
      {isLogedin ? <Layout /> : <LandingPage />}
      {}
    </>
  );
};
export default App;
