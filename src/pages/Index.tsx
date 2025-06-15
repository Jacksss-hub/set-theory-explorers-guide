
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutSets from '../components/AboutSets';
import TypesOfSets from '../components/TypesOfSets';
import Operations from '../components/Operations';
import AdvancedTopics from '../components/AdvancedTopics';
import Applications from '../components/Applications';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSets />
      <TypesOfSets />
      <Operations />
      <AdvancedTopics />
      <Applications />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
