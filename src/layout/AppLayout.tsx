import Cover from "@/components/coverSection/Cover";
import Footer from "@/components/footer/footer";
import MainHeader from "@/components/header/MainHeader";
import ManuSideBar from "@/components/sidebar/ManuSideBar";
import RightSideDetailBar from "@/components/sidebar/RightSideDetailBar";
import React from "react";

const AppLayout = ({ children }: any) => {
  return (
    <div className="home">
      <MainHeader />
      <Cover />
      <div className="layout">
        <ManuSideBar />
        {children}

        <RightSideDetailBar />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
