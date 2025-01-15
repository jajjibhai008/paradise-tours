import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import GoogleLogo from "@/data/images/google_logo.png";
import type { Review } from "@/types/review"
import { getRatingNumber } from "@/utils/rating"

interface ReviewCardProps {
    review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
    const ratingNumber = getRatingNumber(review.starRating)

    return (
        <Card className="m-3 shadow-md cursor-pointer transition-transform duration-300 hover:-rotate-1 hover:scale-[1.03]">
            <CardContent className="p-8 ">
                <div className="flex flex-row justify-between items-start">
                    <div className="text-6xl text-slate-800 font-serif">"</div>
                    <img
                        src={GoogleLogo.src}
                        alt="Google"
                        className="h-5 w-auto"
                    />
                </div>
                <p className="text-slate-600 mb-4 min-h-[120px] italic">
                    {review.comment}
                </p>

                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={`https://avatar.vercel.sh/${review.reviewer.displayName}`} />
                        <AvatarFallback>{review.reviewer.displayName.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div>
                        <h3 className="font-semibold text-slate-800">
                            {review.reviewer.displayName}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className={`h-4 w-4 ${index < ratingNumber ? 'fill-orange-500 text-orange-500' : 'fill-slate-200 text-slate-200'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
