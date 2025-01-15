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
import { type SectionProps } from "@/types/tour-form"
import { cn } from "@/lib/utils"

export function PersonalInformation({ form, isOpen, onOpenChange }: SectionProps) {
  return (
    <Collapsible open={isOpen} onOpenChange={onOpenChange} className="space-y-4">
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
        <h3 className="text-base md:text-lg font-semibold text-left">Personal Information</h3>
        {isOpen ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Your Name *
                </FormLabel>
                <FormControl>
                  <Input 
                    className={cn(
                      'outline-none',
                      form.formState.errors.name && "border-red-500"
                    )} 
                    placeholder="Usama Ahmed" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company/Institute Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Paradise Tours (optional)" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+923xxxxxxxxx"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="secondaryPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Secondary Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+923xxxxxxxxx (optional)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="info@paradisetours.pk (optional)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CollapsibleContent>
    </Collapsible>
  )
}
