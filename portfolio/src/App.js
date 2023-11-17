import './index.css';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';


function App() {

  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      case "Projects":
        return <Projects />;
      default:
        return <About />;
    } 
  };
  return (
    <div>
      <Header handlePageChange= {handlePageChange}></Header>
      <main>
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            border: '1px solid white',
            padding: '16px',
            color: 'black',
            backgroundColor: 'white'
          },
        }}
      /> 
      </main>
      <Footer></Footer>
    </div>
  );
}


export default App;
