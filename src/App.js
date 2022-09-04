import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import Newsletter from "./Components/Newsletter";
import Feature from "./Components/Feature"; 

function App() {
  return (
    <>
      <NavBar />
      <Hero />

      <Feature/>
      <Form />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
