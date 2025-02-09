"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Mood = "Very Negative" | "Negative" | "Neutral" | "Positive" | "Very Positive"

const moodColors = {
  "Very Negative": "#FF4136",
  Negative: "#FF851B",
  Neutral: "#FFDC00",
  Positive: "#2ECC40",
  "Very Positive": "#0074D9",
}

const moodEmojis = {
  "Very Negative": "😡",
  Negative: "😕",
  Neutral: "😐",
  Positive: "🙂",
  "Very Positive": "😄",
}

interface MoodThermometerProps {
  sentiment: number // Assuming sentiment is a number between -1 and 1
}

export function MoodThermometer({ sentiment }: MoodThermometerProps) {
  const [mood, setMood] = useState<Mood>("Neutral")

  useEffect(() => {
    if (sentiment < -0.6) setMood("Very Negative")
    else if (sentiment < -0.2) setMood("Negative")
    else if (sentiment < 0.2) setMood("Neutral")
    else if (sentiment < 0.6) setMood("Positive")
    else setMood("Very Positive")
  }, [sentiment])

  const thermometerHeight = 200
  const fillHeight = ((sentiment + 1) / 2) * thermometerHeight // Convert -1 to 1 range to 0 to 200

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-100">Organizational Mood</h2>
      <div className="relative w-20 h-52 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 w-full rounded-full"
          style={{ backgroundColor: moodColors[mood] }}
          initial={{ height: 0 }}
          animate={{ height: fillHeight }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={mood}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl"
            >
              {moodEmojis[mood]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <motion.p
        className="mt-4 text-lg font-medium text-gray-100"
        key={mood}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {mood}
      </motion.p>
    </div>
  )
}

