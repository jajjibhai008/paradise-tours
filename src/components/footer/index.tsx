import { Facebook, Instagram, Linkedin, Mail, MapPin, Mountain, Phone, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import Logo from "@/data/images/logo.png"
import FooterImage from "@/data/images/footer_bg.jpeg"

export default function Footer() {
    return (
        <footer className="relative border-t">
            <Image
                src={FooterImage}
                alt=""
                fill
                className="object-cover -z-10"
                priority
            />
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 w-full py-8 sm:py-12 lg:py-16 bg-white/30 backdrop-blur-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
                    {/* Logo Section */}
                    <Link href={"/"} className="sm:col-span-2 lg:col-span-1 flex justify-center sm:justify-start">
                        <Image 
                            src={Logo}
                            alt="Paradise Tours Logo"
                            className="hover:opacity-90 transition-opacity size-32 sm:size-40"
                        />
                    </Link>

                    {/* Destinations Section */}
                    <div>
                        <h3 className="mb-4 text-base font-semibold text-primary text-center sm:text-left">
                            Destinations
                        </h3>
                        <ul className="space-y-3 text-sm flex flex-col items-center sm:items-start">
                            <li>
                                <Link href="#" className="text-primary hover:text-primary hover:font-medium transition-all duration-200 flex items-center gap-2">
                                    <Mountain className="h-4 w-4" />
                                    Popular Places
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-primary hover:text-primary hover:font-medium transition-all duration-200">
                                    Featured Tours
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-primary hover:text-primary hover:font-medium transition-all duration-200">
                                    Adventure Travel
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-primary hover:text-primary hover:font-medium transition-all duration-200">
                                    Luxury Retreats
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className="mb-4 text-base font-semibold text-primary text-center sm:text-left">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm flex flex-col items-center sm:items-start">
                            <li>
                                <Link href="#" className="text-primary hover:text-primary hover:font-medium transition-all duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-primary hover:text-primary hover:font-medium transition-all duration-200">
                                    Travel Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-primary hover:text-primary hover:font-medium transition-all duration-200">
                                    Partners
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-primary hover:text-primary hover:font-medium transition-all duration-200">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="mb-4 text-base font-semibold text-primary text-center sm:text-left">
                            Contact Us
                        </h3>
                        <ul className="space-y-4 text-sm flex flex-col items-center sm:items-start">
                            <li>
                                <a
                                    href="tel:+1234567890"
                                    className="flex items-center gap-3 text-primary hover:text-primary hover:font-medium transition-all duration-200 group"
                                >
                                    <Phone className="h-4 w-4 text-primary" />
                                    +92 (309) 8504550
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:hello@travelvista.com"
                                    className="flex items-center gap-3 text-primary hover:text-primary hover:font-medium transition-all duration-200 group"
                                >
                                    <Mail className="h-4 w-4 text-primary" />
                                    info@paradisetours.com
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center sm:items-start gap-3 text-primary group">
                                    <MapPin className="h-4 w-4 mt-1 text-primary" />
                                    <span className="leading-relaxed text-center sm:text-left">
                                        P-16, Siddique Trade center
                                        <br />
                                        Main Boulevard Gulberg
                                        <br />
                                        Lahore, Pakistan
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Socials Section */}
                    <div>
                        <h3 className="mb-4 text-base font-semibold text-primary text-center sm:text-left">
                            Socials
                        </h3>
                        <div className="flex justify-center sm:justify-start space-x-6">
                            <Link href="#" className="text-primary hover:text-primary hover:font-medium">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-primary hover:text-primary hover:font-medium">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-primary hover:text-primary hover:font-medium">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-primary hover:text-primary hover:font-medium">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Optional Image Gallery - Uncomment if needed */}
                {/* <div className="mt-12 flex flex-row gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    <div className="relative w-60 h-90 flex-shrink-0">
                        <img
                            src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Scenic mountain landscape"
                            className="object-cover w-full h-full rounded-xl transition-transform duration-300 hover:-rotate-1 hover:scale-[1.03]"
                        />
                    </div>
                    <div className="relative w-60 h-90 flex-shrink-0">
                        <img
                            src="https://images.pexels.com/photos/949193/pexels-photo-949193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Beautiful beach sunset"
                            className="object-cover w-full h-full rounded-xl transition-transform duration-300 hover:-rotate-1 hover:scale-[1.03]"
                        />
                    </div>
                    <div className="relative w-60 h-90 flex-shrink-0">
                        <img
                            src="https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Mountain valley view"
                            className="object-cover w-full h-full rounded-xl transition-transform duration-300 hover:-rotate-1 hover:scale-[1.03]"
                        />
                    </div>
                    <div className="relative w-60 h-90 flex-shrink-0">
                        <img
                            src="https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Snowy mountain peaks"
                            className="object-cover w-full h-full rounded-xl transition-transform duration-300 hover:-rotate-1 hover:scale-[1.03]"
                        />
                    </div>
                    <div className="relative w-60 h-90 flex-shrink-0">
                        <img
                            src="https://images.pexels.com/photos/1450079/pexels-photo-1450079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Desert landscape"
                            className="object-cover w-full h-full rounded-xl transition-transform duration-300 hover:-rotate-1 hover:scale-[1.03]"
                        />
                    </div>
                </div> */}
            </div>
        </footer>
    )
}

