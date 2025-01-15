import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative min-h-[70vh] w-full flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center w-full h-full"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/3462588/pexels-photo-3462588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
                }}
            >
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
                    Discover Your Next Adventure
                </h1>
                <p className="text-xl text-white text-center mb-8 max-w-2xl">
                    Explore breathtaking destinations and create unforgettable memories
                </p>
                <Button
                    size="lg"
                    className="bg-primary rounded-xl hover:bg-primary/80 transform transition-all duration-2000 hover:scale-105 hover:shadow-lg text-lg px-8 animate-pulse"
                    asChild
                >
                    <Link href="/get-qoute">Get Quote</Link>
                </Button>
            </div>
        </div>
    )
}

export default Hero;