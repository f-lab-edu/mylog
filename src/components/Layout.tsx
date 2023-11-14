import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { memo } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Layout.displayName = "Layout";

export default memo(Layout);
