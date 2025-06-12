import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import TeamSection from "../components/team-section";
import WorkSection from "../components/work-section";
import TestimonialsSection from "../components/testimonials-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <WorkSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}