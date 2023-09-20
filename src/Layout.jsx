import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import Loader from "./components/Loader/Loader";

function Layout() {
  const navigation = useNavigation()
  return (
    <>
      <Header />
      {
        navigation.state === 'loading' ? <Loader/> : <Outlet/>
      }
      <Footer/>
    </>
  );
}

export default Layout;
