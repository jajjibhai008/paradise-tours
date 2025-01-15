'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { PersonalInformation } from "@/sections/get-qoute/personal-information"
import { TourDetails } from "@/sections/get-qoute/tour-details"
import { AccommodationDetails } from "@/sections/get-qoute/accommodation-details"
import { AdditionalInfo } from "@/sections/get-qoute/additional-info"
import { tourFormSchema, type FormData } from "@/types/tour-form"
import { toast } from "sonner"
import { Separator } from "@/components/ui/separator"

export default function TourBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<FormData>({
    resolver: zodResolver(tourFormSchema),
    defaultValues: {
      name: "",
      company: "",
      tourType: "corporate",
      adults: "1",
      children: "0",
      days: "3",
      rooms: "1",
      phone: "",
      secondaryPhone: "",
      email: "",
      travelMode: "road",
      pickupCity: "",
      dateRange: {
        from: new Date(),
        to: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        fromTime: "12:00 AM",
      },
      destinations: [],
      hotelCategories: [],
      comments: "",
    },
  })

  const [isPersonalOpen, setIsPersonalOpen] = useState(true)
  const [isTourOpen, setIsTourOpen] = useState(false)
  const [isTravelOpen, setIsTravelOpen] = useState(false)
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false)

  async function onSubmit(data: FormData) {
    setIsSubmitting(true)
    try {
      // Format the data into a readable message
      const formattedDate = `${data.dateRange.from.toLocaleDateString()} to ${data.dateRange.to.toLocaleDateString()}`
      
      const message = `
*New Tour Booking Request*
------------------------
*Personal Information*
*Name*: ${data.name}
*Company*: ${data.company || '-'}
*Phone*: ${data.phone}
*Secondary Phone*: ${data.secondaryPhone || '-'}
*Email*: ${data.email || '-'}

*Tour Details*
*Tour Type*: ${data.tourType.charAt(0).toUpperCase() + data.tourType.slice(1)}
*Adults*: ${data.adults}
*Children*: ${data.children}
*Duration*: ${data.days} days
*Rooms*: ${data.rooms}

*Travel & Accommodation*
*Travel Mode*: ${data.travelMode === 'road' ? 'By Road' : 'By Air'}
*Pickup City*: ${data.pickupCity}
*Date*: ${formattedDate}
*Start Time*: ${data.dateRange.fromTime}
*Destinations*: ${data.destinations.length > 0 ? data.destinations.join(', ') : '-'}
*Hotel Categories*: ${data.hotelCategories.length > 0 ? data.hotelCategories.join(', ') : '-'}

*Additional Comments*
*Comments*: ${data.comments || '-'}
------------------------
`.trim()

      // Create WhatsApp link with the formatted message
      const whatsappNumber = "923441769460" // Replace with your number
      const encodedMessage = encodeURIComponent(message)
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

      // Open WhatsApp in a new tab
      window.open(whatsappLink, '_blank')

      toast.success("Your tour booking request has been submitted. We will get back to you within 24 hours.", {
        icon: "✓",
        style: {
          color: 'green',
          background: 'white',
        },
        duration: 4000,
        className: "animate-in slide-in-from-top-2 duration-300",
      })

    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        icon: "✕",
        style: {
          color: 'red',
          background: 'white',
        },
        duration: 4000,
        className: "animate-in slide-in-from-top-2 duration-300",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[60vw] mx-auto md:px-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Tour Booking Request</CardTitle>
        <CardDescription>
          Fill out the form below to request your tour booking
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <PersonalInformation
              form={form}
              isOpen={isPersonalOpen}
              onOpenChange={setIsPersonalOpen}
            />
            <Separator />
            <TourDetails
              form={form}
              isOpen={isTourOpen}
              onOpenChange={setIsTourOpen}
            />
            <Separator />
            <AccommodationDetails
              form={form}
              isOpen={isTravelOpen}
              onOpenChange={setIsTravelOpen}
            />
            <Separator />
            <AdditionalInfo
              form={form}
              isOpen={isAdditionalOpen}
              onOpenChange={setIsAdditionalOpen}
            />
            <Button 
              type="submit" 
              variant={"default"} 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Booking Request"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
