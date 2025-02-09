"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface NotificationProps {
  message: string
  type: "info" | "warning" | "error"
}

export function Notification({ message, type }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  const bgColor = type === "info" ? "bg-blue-500" : type === "warning" ? "bg-yellow-500" : "bg-red-500"

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-4 right-4 ${bgColor} text-white p-4 rounded-md shadow-lg flex items-center`}
        >
          <span>{message}</span>
          <button onClick={() => setIsVisible(false)} className="ml-4 focus:outline-none">
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

