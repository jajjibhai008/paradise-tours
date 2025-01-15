import { CalendarIcon, ChevronDownIcon, ChevronUpIcon, X } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { type SectionProps } from "@/types/tour-form"
import { useState } from "react"

const hotelCategories = [
  { value: "standard", label: "Standard" },
  { value: "deluxe", label: "Deluxe" },
  { value: "executive", label: "Executive" },
  { value: "premium", label: "Premium" },
]

export function AccommodationDetails({ form, isOpen, onOpenChange }: SectionProps) {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([])
  const [destinationInput, setDestinationInput] = useState("")
  const [selectedHotelCategories, setSelectedHotelCategories] = useState<string[]>([])

  const handleDestinationKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && destinationInput.trim()) {
      e.preventDefault()
      if (!selectedDestinations.includes(destinationInput.trim())) {
        setSelectedDestinations([...selectedDestinations, destinationInput.trim()])
        form.setValue('destinations', [...selectedDestinations, destinationInput.trim()])
      }
      setDestinationInput("")
    }
  }

  const removeDestination = (destination: string) => {
    const newDestinations = selectedDestinations.filter(d => d !== destination)
    setSelectedDestinations(newDestinations)
    form.setValue('destinations', newDestinations)
  }

  const toggleHotelCategory = (category: string) => {
    const newCategories = selectedHotelCategories.includes(category)
      ? selectedHotelCategories.filter(c => c !== category)
      : [...selectedHotelCategories, category]
    setSelectedHotelCategories(newCategories)
    form.setValue('hotelCategories', newCategories)
  }

  return (
    <Collapsible open={isOpen} onOpenChange={onOpenChange} className="space-y-4">
      <CollapsibleTrigger className="flex items-center justify-between w-full">
        <h3 className="text-base md:text-lg font-semibold text-left">Travel & Accommodation Details</h3>
        {isOpen ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="travelMode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Travel Mode *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select travel mode" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="road">By Road</SelectItem>
                    <SelectItem value="air">By Air</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pickupCity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup City *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g: Lahore" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="dateRange"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tour Dates & Times *</FormLabel>
              <div className="grid gap-4">
                <Popover >
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value?.from ? (
                          field.value.to ? (
                            <>
                              {format(field.value.from, "LLL dd, y")} -{" "}
                              {format(field.value.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(field.value.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date range</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={field.value?.from}
                      selected={field.value}
                      onSelect={(dates) => {
                        field.onChange({
                          ...field.value,
                          ...dates,
                        })
                      }}
                      numberOfMonths={3}
                      className="w-full"
                      disabled={{before: new Date()}}
                      classNames={{
                        day: "h-9 w-9 p-0 font-normal text-xs text-center",
                        range_start: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground rounded-tl-lg rounded-bl-lg",
                        range_end: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground rounded-tr-lg rounded-br-lg", 
                        range_middle: "bg-muted hover:bg-muted",
                        caption_label: "font-normal text-sm",
                        weekdays: "font-normal text-xs",
                        disabled: "text-muted-foreground opacity-50",
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormItem>
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        value={field.value.fromTime}
                        onChange={(e) => {
                          const hour = parseInt(e.target.value);
                          const ampm = hour < 12 ? 'AM' : 'PM';
                          const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
                          field.onChange({
                            ...field.value,
                            fromTime: `${displayHour}:00 ${ampm}`
                          })
                        }}
                      >
                        <option value="">Select hour</option>
                        {Array.from({length: 24}, (_, i) => {
                          const hour = i === 0 ? 12 : i > 12 ? i - 12 : i;
                          const ampm = i < 12 ? 'AM' : 'PM';
                          const value = i.toString();
                          return (
                            <option key={value} value={value + ':00 ' + ampm}>
                              {hour}:00 {ampm}
                            </option>
                          )
                        })}
                      </select>
                    </FormControl>
                  </FormItem>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-4 grid-cols-1">
          <FormField
            control={form.control}
            name="destinations"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Desired Destinations *</FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    <Input
                      placeholder="Type a destination and press Enter"
                      value={destinationInput}
                      onChange={(e) => setDestinationInput(e.target.value)}
                      onKeyDown={handleDestinationKeyDown}
                      className={cn(
                        form.formState.errors.destinations && "border-red-500"
                      )}
                    />
                    <div className="flex flex-wrap gap-2">
                      {selectedDestinations.map((destination) => (
                        <Badge
                          key={destination}
                          variant="secondary"
                          className="px-3 py-1"
                        >
                          {destination}
                          <button
                            type="button"
                            onClick={() => removeDestination(destination)}
                            className="ml-2 hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </FormControl>
                <FormDescription>
                  Press Enter after typing each destination
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="hotelCategories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hotel Categories *</FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-2">
                  {hotelCategories.map((category) => (
                    <Button
                      key={category.value}
                      type="button"
                      variant={selectedHotelCategories.includes(category.value) ? "default" : "outline"}
                      onClick={() => toggleHotelCategory(category.value)}
                      className="rounded-full text-sm"
                      size="sm"
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </FormControl>
              <FormDescription>
                Select one or more hotel categories
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </CollapsibleContent>
    </Collapsible>
  )
}
