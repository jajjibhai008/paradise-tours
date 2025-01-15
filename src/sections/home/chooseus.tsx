import Title from "@/components/title";
import { Check } from "lucide-react";

const WhyChooseUs = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <Title title="Why Choose Us" />
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
                        {[
                            "Expert Travel Planning",
                            "Best Price Guarantee", 
                            "Customized Tours",
                            "Local Expertise",
                            "Flexible Itineraries",
                            "Travel Insurance",
                            
                        ].map((feature) => (
                            <div key={feature} className="flex items-center gap-4">
                                <div className="bg-primary rounded-full p-2">
                                    <Check className="h-6 w-6 text-white" />
                                </div>
                                <p className="font-semibold text-black">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;