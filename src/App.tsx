import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import ScrollTimeLine from "./views/ScrollTimeline/index";
import ViewTimeLine from "./views/ViewTimeline/index";
import AnimationRange from "./views/AnimationRange/index";
import ScrollShadows from "./views/ScrollShadows/index";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<ScrollTimeLine />} />
          <Route path="/view-timeline" element={<ViewTimeLine />} />
          <Route path="/animation-range" element={<AnimationRange />} />
          <Route path="/scroll-shadows" element={<ScrollShadows />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
