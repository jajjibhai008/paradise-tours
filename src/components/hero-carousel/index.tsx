'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export interface CarouselImage {
    src: string
    alt?: string
}

interface CarouselProps {
    images: CarouselImage[]
    autoPlayInterval?: number
    className?: string
    onGetQuote?: () => void
}

export function Carousel({
    images,
    autoPlayInterval = 5000,
    className,
    onGetQuote = () => window.location.href = '/get-qoute'
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(images.length - 1)
    const [isHovered, setIsHovered] = useState(false)
    

    useEffect(() => {
        const timer = setInterval(() => {
            setPrevIndex(currentIndex)
            setCurrentIndex((current) => (current + 1) % images.length)
        }, autoPlayInterval)

        return () => clearInterval(timer)
    }, [images.length, autoPlayInterval, currentIndex])

    const getSlidePosition = (index: number) => {
        if (index === currentIndex) return "translate-x-0"
        if (index === prevIndex) return "-translate-x-full"
        return "translate-x-full"
    }

    const getTransitionStyles = (index: number) => {
        if (index === prevIndex) {
            return {
                transitionProperty: 'transform, opacity',
                transitionDuration: '1000ms, 0ms',
                transitionDelay: '0ms, 1000ms',
                transitionTimingFunction: 'ease-in-out'
            }
        }
        return {
            transitionProperty: 'transform',
            transitionDuration: '1000ms',
            transitionTimingFunction: 'ease-in-out'
        }
    }

    return (
        <div className={cn("relative overflow-hidden", className)}>
            <div
                className="relative w-full h-full"
                role="region"
                aria-roledescription="carousel"
                aria-label="Image carousel"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={getTransitionStyles(index)}
                        className={cn(
                            "absolute inset-0 w-full h-full",
                            getSlidePosition(index),
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <div className="absolute inset-0 bg-black/30" />
                        <Image
                            src={image.src}
                            alt={image.alt || ""}
                            fill
                            priority={index === 0}
                            className="object-cover object-center"
                            sizes="100vw"
                            quality={85}
                        />
                    </div>
                ))}

                <div className="absolute left-1/2 bottom-4 sm:bottom-12 -translate-x-1/2 z-10 text-center">
                    <h1 className="font-bold text-xl mb-2 md:text-6xl md:mb-12 text-white drop-shadow-2xl">
                        Discover Your Next Adventure
                    </h1>
                    <Button
                        size="lg"
                        className={cn(
                            "bg-[rgb(45,88,100)] hover:bg-[rgb(56,140,153)] text-white",
                            "px-4 py-2 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-lg",
                            "transition-all duration-300 ease-out", 
                            "hover:shadow-[rgb(56,140,153)]/25 hover:shadow-xl",
                            "focus:outline-none focus:ring-2 focus:ring-[rgb(56,140,153)] focus:ring-offset-2",
                            "animate-bounce-gentle"
                        )}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={onGetQuote}
                    >
                        <span className="relative flex items-center gap-1 sm:gap-2">
                            Get Quote
                            <ArrowRight 
                                className={cn(
                                    "w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300",
                                    isHovered ? "translate-x-1" : ""
                                )}
                            />
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
