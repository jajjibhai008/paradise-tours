import Image from "next/image"
import { Star } from 'lucide-react'
import { Card } from "@/components/ui/card"
import GoogleLogo from "@/data/images/google_name_logo.png";
import { Review } from "@/types/review";
import Title from "@/components/title"


export default function Testimonial({ review }: { review: Review }) {
    return (
        <div className="w-full overflow-hidden">
            <Title title="What our travellers say" />
            <div className="flex justify-center">
                <Card className="relative bg-[#0a0b1e] text-white border border-gray-800 p-8 md:p-12 w-[90vw] md:w-[80vw] lg:w-[70vw] overflow-hidden rounded-3xl flrx">
                    <div className="absolute bottom-0 right-0 w-72 h-72 opacity-50">
                        <div className="absolute bottom-0 right-0 w-full h-full card-gradient transform rotate-45" />
                        <div className="absolute bottom-16 -right-6 w-full h-full card-gradient transform rotate-45" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${review.starRating === 'FIVE' ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                            <Image
                                src={GoogleLogo}
                                alt="Google logo"
                                className="h-12 w-auto"
                            />
                        </div>

                        <div className="flex-1">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                                "We had a great time with Paradise Tours!"
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed line-clamp-4">
                                {review.comment}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-12">
                            <img
                                src="https://lh3.googleusercontent.com/a-/ALV-UjV9VkMonvPgGZYa-ZvmAa34eHUZNumM4I2bLVkf80s4TfUyPt0m=w120-h120-p-rp-mo-br100"
                                alt={review.reviewer.displayName}
                                className="rounded-full w-12 h-12"
                            />
                            <div>
                                <h3 className="font-semibold">{review.reviewer.displayName}</h3>
                                <p className="text-sm text-gray-400">Verified Review</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

