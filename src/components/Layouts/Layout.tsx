import React, { Fragment } from "react";
import Topbar from "../Appbars/Topbar";
import Footer from "../Footer/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Topbar />
      <div className="w-full min-h-screen bg-gray-100">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
// className="max-w-screen-sm min-h-screen shadow-sm dark:bg-gray-800 dark:text-white"
