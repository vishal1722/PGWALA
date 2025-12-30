import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";


function App() {
  return (
    <div className="bg-gray-100 w-full h-full box-border">
      <Navbar />
      <Home />
      <Footer />
     
    </div>
  );
}

export default App;
