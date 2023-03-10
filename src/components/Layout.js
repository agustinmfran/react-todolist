import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
