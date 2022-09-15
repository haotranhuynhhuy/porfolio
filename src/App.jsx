import Intro from './intro';
import Topbar from './topbar'
import Portfolio from './portfolio'
import Works from './works';
import Testimontials from './testimonials'
import Contact from './contact'
import Menus from './menus';
import './app.scss'
import { useState } from 'react';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () =>{
    setMenuOpen(prev => !prev)
  }
  return (
    <div className="app">
      <Topbar onMenuOpen={handleMenuOpen} menuOpen={menuOpen} />
      <Menus onMenuOpen={handleMenuOpen} menuOpen={menuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimontials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
