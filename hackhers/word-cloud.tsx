"use client"
import { TagCloud } from "react-tagcloud"

const data = [
  { value: "Performance", count: 38 },
  { value: "Goals", count: 30 },
  { value: "Feedback", count: 28 },
  { value: "Training", count: 25 },
  { value: "Collaboration", count: 22 },
  { value: "Innovation", count: 20 },
  { value: "Leadership", count: 18 },
  { value: "Productivity", count: 15 },
  { value: "Engagement", count: 12 },
  { value: "Development", count: 10 },
  { value: "Communication", count: 8 },
  { value: "Teamwork", count: 6 },
  { value: "Strategy", count: 4 },
  { value: "Culture", count: 2 },
]

export function WordCloud() {
  return (
    <TagCloud
      minSize={12}
      maxSize={35}
      tags={data}
      className="text-center"
      onClick={(tag: { value: string; count: number }) => console.log(`'${tag.value}' was selected!`)}
    />
  )
}

