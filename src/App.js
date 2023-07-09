import Landing from './Landingpage/Landing';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <section>
        <Router>
          <Landing/>
        </Router>
      </section>
      <hr className='hr'></hr>
      <section>
        <Skills/>
      </section>
      <section>
        <Projects/>
      </section>
      <section>
         <Contact/>
      </section>
     
     
    </div>
  );
}

export default App;
