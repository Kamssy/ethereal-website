import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import FeaturedSection from "./FeaturedSection";
import QuoteSection from "./QuoteSection";
import GallerySection from "./GallerySection";
import NewsletterSection from "./NewsletterSection";
import "../../styles/Home.css";

function Home() {
  return (
    <main className="home">
      <HeroSection />
      <StatsSection />
      <FeaturedSection />
      <QuoteSection />
      <GallerySection />
      <NewsletterSection />
    </main>
  );
}

export default Home;
