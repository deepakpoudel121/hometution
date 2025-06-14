import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SearchBar } from "@/components/search-bar"
import { SubjectsGrid } from "@/components/subjects-grid"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturedTutors } from "@/components/featured-tutors"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SearchBar />
      <SubjectsGrid />
      <HowItWorks />
      <FeaturedTutors />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  )
}