'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ReviewCard } from "./review-card"
import type { Review } from "@/types/review"
import Title from "@/components/title"

interface ReviewsCarouselProps {
  reviews: Review[]
  averageRating?: number
  totalReviews?: number
}

export function Reviews({ 
  reviews,
  averageRating = 5,
  totalReviews = 533
}: ReviewsCarouselProps) {
  return (
    <div className="flex flex-col w-full max-w-6x">
       <Title title="Customer Reviews" />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {[...reviews].map((review, index) => (
            <CarouselItem key={`${review.reviewer.displayName}-${index}`} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                <ReviewCard review={review} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
    </div>
  )
}

