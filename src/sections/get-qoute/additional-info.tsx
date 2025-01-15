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
import { Textarea } from "@/components/ui/textarea"
import { type SectionProps } from "@/types/tour-form"

export function AdditionalInfo({ form, isOpen, onOpenChange }: SectionProps) {
  return (
    <Collapsible open={isOpen} onOpenChange={onOpenChange} className="space-y-4">
      <CollapsibleTrigger className="flex items-center justify-between w-full">
        <h3 className="text-base md:text-lg font-semibold text-left">Additional Information</h3>
        {isOpen ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4">
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Comments</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter any specific requirements or comments"
                  className="min-h-[100px]"
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

