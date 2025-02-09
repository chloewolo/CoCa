"use client"

import React from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"

type DateRange = { from: Date | undefined; to: Date | undefined } | undefined

export function DateRangeSelector({ onRangeChange }: { onRangeChange: (range: DateRange) => void }) {
  const [date, setDate] = React.useState<DateRange>()

  React.useEffect(() => {
    onRangeChange(date)
  }, [date, onRangeChange])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700">
          <Calendar className="mr-2 h-4 w-4" />
          {date?.from ? (
            date.to ? (
              <>
                {date.from.toDateString()} - {date.to.toDateString()}
              </>
            ) : (
              date.from.toDateString()
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700" align="start">
        <CalendarComponent
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          className="text-gray-200"
        />
      </PopoverContent>
    </Popover>
  )
}

