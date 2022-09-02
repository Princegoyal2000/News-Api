import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<News key="general" category="general"/>}></Route> 
      <Route path="/business" element={<News key="business" category="business"/>}></Route> 
      <Route path="/entertainment" element={<News key="entertainment" category="entertainment"/>}></Route> 
      <Route path="/general" element={<News key="general" category="general"/>}></Route> 
      <Route path="/health" element={<News key="health" category="health"/>}></Route> 
      <Route path="/science" element={<News key="science" category="science"/>}></Route> 
      <Route path="/sports" element={<News key="sports" category="sports"/>}></Route> 
      <Route path="/technology" element={<News key="technology" category="technology"/>}></Route> 
    </Routes>
    <Footer/>
    </>
    </Router>
  );
}

export default App;
