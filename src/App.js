
import './App.css';

import BestServiceSection from './components/BestServiceSection';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

import Collections from './components/Collections';
import FavouriteCoffee from './components/FavouriteCoffee';
import { Hero } from './components/Hero';
import InnovativeTeams from './components/InnovativeTeams';
import { NewsLetter } from './components/NewsLetter';
import Testimonials from './components/Testimonials';
import Shop from './components/shop';

function App() {
  return (
    <>
      <NavBar />
      <Hero rating={5} />
      <Collections />
      <Shop />
      <FavouriteCoffee />
      <Testimonials />
      <BestServiceSection />   
      <InnovativeTeams />
      <NewsLetter />
    
      <Footer />
    </>
  );
}

export default App;
