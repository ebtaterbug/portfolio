
import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  const [page, setCurrentPage] = useState('About');

  const changePage = () => {
    switch (page) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  }

  return (
    <div>
      <Header 
        changePage={page}
        setCurrentPage={setCurrentPage}
      ></Header>
      <main>
        {changePage()}
      </main>
      <Footer />
    </div>
  )
}

export default App;