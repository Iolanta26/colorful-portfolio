import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contacts from "./components/Contacts/Contacts";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="section">
        <Topbar />
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
