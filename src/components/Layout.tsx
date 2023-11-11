import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
