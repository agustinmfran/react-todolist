import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main id="home" className="flex justify-center items-center h-screen ">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
