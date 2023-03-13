import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      {/* <Routes>
        <Route path="add-task" element={<AddTask />} />
        <Route path="about-us" element={<About />} />
        <Route path="footer" element={<Footer />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
