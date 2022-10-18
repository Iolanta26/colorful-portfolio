import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contacts from "./components/Contacts/Contacts";

import "./App.css";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const scrollHandle = (e) => {
    setNum(e.target.scrollTop);
  };

  return (
    <div className="app">
      <div className="sections" onScroll={scrollHandle}>
        <Topbar className="section" />
        <Intro className="section" />
        <About className="section" num={num} />
        <Projects className="section" />
        <Skills className="section" />
        <Contacts className="section" />
      </div>
    </div>
  );
}

export default App;
