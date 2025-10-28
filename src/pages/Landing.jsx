import CTASection from "../component/landing/CTASection";
import FeatureSection from "../component/landing/FeatureSection";
import FooterSection from "../component/landing/FooterSection";
import HeroSection from "../component/landing/HeroSection";
import PricingSection from "../component/landing/PricingSection";
import TestimonialSection from "../component/landing/TestimonialSection";
import { features,pricingPlans} from "../assets/data";


const Landing=()=>{
    return(
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
            {/*Hero Section */}
            <HeroSection/>

            {/*Fature Section*/}
            <FeatureSection features={features}/>

            {/*Pricing section*/}
            <PricingSection pricingPlans={pricingPlans}/>

            {/*Testimonial Scetion*/}
            <TestimonialSection/>

            {/*CTA Section*/}
            <CTASection/>
            
            {/*Footer Section*/}
            <FooterSection/>
        </div>
    )
}
export default Landing;