import React, { PropsWithChildren } from "react";
import { NavBar } from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
