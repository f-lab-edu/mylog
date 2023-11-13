import Footer from "./layout/Footer";
import Header from "./layout/Header";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
