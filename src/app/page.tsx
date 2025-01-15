import { OurClients } from "@/sections/home/clients";
import WhyChooseUs from "@/sections/home/chooseus";
import reviewsData from "@/data/reviews.json";
import { Review } from "@/types/review";
import Testimonial from "@/sections/home/testimonials";
import Hero from "@/sections/home/hero";

// Type assertion to ensure reviews data matches Review type
const reviews = reviewsData.reviews as Review[];

export default function Home() {
  return (
    <div className="w-screen flex flex-col gap-14 mb-10">
      <Hero />
      <WhyChooseUs />
      <OurClients />
      <Testimonial review={reviews[1]} />
      
    </div>
  );
}
