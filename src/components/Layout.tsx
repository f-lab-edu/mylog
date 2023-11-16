import Footer from "./layout/Footer";
import Header from "./layout/Header";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = React.memo(({ children }: LayoutProps) => {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
