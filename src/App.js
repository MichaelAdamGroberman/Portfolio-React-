import './App.css';
// import components to main view
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      {/* add components */}
      <Nav />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
