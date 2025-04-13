import "./App.css";
import FeatureSection from "./components/sections/FeatureSection";
import Footer from "./components/sections/Footer";
import GetAppSection from "./components/sections/GetAppSection";
import Hero from "./components/sections/Hero";
import MapSection from "./components/sections/MapSection";
import StatsSection from "./components/sections/StatsSection";
import StepsSection from "./components/sections/StepsSection";
import Testimonial from "./components/sections/Testimonial";
import VideoSection from "./components/sections/VideoSection";

function App() {
  return (
    <main className="">
      <Hero />
      <StatsSection />
      <VideoSection />
      <Testimonial />
      <StepsSection />
      <FeatureSection />
      <MapSection />
      <GetAppSection />
      <Footer />
    </main>
  );
}

export default App;
