
import heroData from "@/data/heroData";
import Hero from "../components/Hero";
import SpeakerIntro from "./SpeakerIntro";
import ConveyorBelt from "./Conveyorbelt";
import TestimonialCarousel from "./TestimonialCarousel";
import SpeakersSection from "../HomePage/SpeakersSection";

const SpeakersPage = () => {
  const { image, title } = heroData.speakers;

  return (
    <div className="">
      <main>
        {/* Hero Section */}
        <Hero media={{ type: "image", src: "/P7.png" }} title={title} isSpecial={true} />
        <SpeakerIntro />
        <ConveyorBelt />
        <TestimonialCarousel />
        <SpeakersSection />
      </main>
    </div>
  );
};

export default SpeakersPage;
