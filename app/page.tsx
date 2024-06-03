import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Feedback from "@/components/Feedback";
import Gallery from "@/components/Gallery";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Gallery/>
      <Features />
      <Pricing/>
      <Feedback/>
      <GetApp />
    </>
  )
}
