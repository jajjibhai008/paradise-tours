import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { type SectionProps } from "@/types/tour-form"

const tourTypes = [
  { value: "corporate", label: "Corporate Tour" },
  { value: "honeymoon", label: "Honeymoon" },
  { value: "family", label: "Family Tour" },
  { value: "private", label: "Private Group Tour" },
  { value: "educational", label: "Educational Institute" },
]

export function TourDetails({ form, isOpen, onOpenChange }: SectionProps) {
  return (
    <Collapsible open={isOpen} onOpenChange={onOpenChange} className="space-y-4">
      <CollapsibleTrigger className="flex items-center justify-between w-full">
        <h3 className="text-base md:text-lg font-semibold text-left">Tour Details</h3>
        {isOpen ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4">
        <FormField
          control={form.control}
          name="tourType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tour Type *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tour type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {tourTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="adults"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Adults (10+) *</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="children"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Children ({"<"}10) *</FormLabel>
                <FormControl>
                  <Input type="number" min="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="days"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Days *</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Rooms *</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

