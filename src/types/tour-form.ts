import { z } from "zod"

export const tourFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  company: z.string().optional(),
  tourType: z.string(),
  adults: z.string().refine((val) => parseInt(val) >= 1, "At least 1 adult required"),
  children: z.string(),
  days: z.string().refine((val) => parseInt(val) >= 1, "At least 1 day required"),
  rooms: z.string().refine((val) => parseInt(val) >= 1, "At least 1 room required"),
  phone: z.string().min(11, "Valid phone number required"),
  secondaryPhone: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  travelMode: z.string(),
  pickupCity: z.string().min(2, "Pickup city is required"),
  dateRange: z.object({
    from: z.date(),
    to: z.date(),
    fromTime: z.string(),
  }),
  destinations: z.array(z.string()).min(1, "At least one destination required"),
  hotelCategories: z.array(z.string()).min(1, "At least one hotel category required"),
  comments: z.string().optional(),
})

export type FormData = z.infer<typeof tourFormSchema>

export interface SectionProps {
  form: any
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

