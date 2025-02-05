'use client'
import heroData from "@/data/heroData";
import Hero from "../components/Hero";
import PodcastIntro from "./PodcastIntro";
import PodcastCarousel from "./PodcastCarousel";
import CollaborationsSlide from "./CollaborationSlide";
import PodcastSnippets from "./PodcastSnippets";
import SpeakersSection from "./SpeakersSection";
import PlansSection from "./PlansSection";

const HomePage = () => {
  const { video, title } = heroData.home;
  const images1 = ["/P12.png", "/P13.png"];
  const images2 = ["/P13.png", "/P12.png"];

  return (
    <div className="">
      <main>
        <Hero media={{ type: "video", src: "/VSLPodcast.mp4" }} title={title} isSpecial={true} />
        <PodcastIntro />
        <PodcastCarousel />
        <CollaborationsSlide />
        <PodcastSnippets images1={images1} images2={images2} />
        <SpeakersSection />
        <PlansSection />
      </main>
    </div>
  );
};

export default HomePage;
