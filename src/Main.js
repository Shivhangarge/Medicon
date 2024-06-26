// src/Main.js
/*import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const Main = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default Main;*/
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';

const Main = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default Main;

