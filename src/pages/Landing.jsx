import CTASection from "../component/landing/CTASection";
import FeatureSection from "../component/landing/FeatureSection";
import FooterSection from "../component/landing/FooterSection";
import HeroSection from "../component/landing/HeroSection";
import PricingSection from "../component/landing/PricingSection";
import TestimonialSection from "../component/landing/TestimonialSection";
import { features, pricingPlans } from "../assets/data";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Landing = () => {
  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  });

  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
      {/*Hero Section */}
      <HeroSection openSignIn={openSignIn} openSignUp={openSignUp} />

      {/*Fature Section*/}
      <FeatureSection features={features} />

      {/*Pricing section*/}
      <PricingSection pricingPlans={pricingPlans} openSignUp={openSignUp} />

      {/*Testimonial Scetion*/}
      <TestimonialSection />

      {/*CTA Section*/}
      <CTASection openSignUp={openSignUp} />

      {/*Footer Section*/}
      <FooterSection />
    </div>
  );
};
export default Landing;
