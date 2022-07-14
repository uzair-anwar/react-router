import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Project from "./pages/project";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./Components/navbar";
import ProjectLayout from "./Components/projectLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index exact element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<ProjectLayout />}>
            <Route path=":category" element={<Project />} />
          </Route>
        </Route>
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
