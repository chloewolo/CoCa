"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "./components/overview"
import { DateRangeSelector } from "./components/date-range-selector"
import { MoodThermometer } from "./components/mood-thermometer"
import { HeatmapChart } from "./components/heatmap-chart"
import { WordCloud } from "./components/word-cloud"
import { SentimentTrend } from "./components/sentiment-trend"
import { Notification } from "./components/notification"
import { ArrowUpIcon, ArrowDownIcon, AlertTriangle, Users, UserCheck, MessageSquare } from "lucide-react"

export default function Home() {
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined } | undefined>()
  const [sentiment, setSentiment] = useState(0) // Initialize with neutral sentiment

  const handleDateRangeChange = (range: { from: Date | undefined; to: Date | undefined } | undefined) => {
    setDateRange(range)
    // Here you would typically fetch new data based on the selected date range
    console.log("Date range changed:", range)

    // Simulate sentiment change when date range changes
    setSentiment(Math.random() * 2 - 1) // Random value between -1 and 1
  }

  return (
    <div className="space-y-6">
      <Notification message="New high-risk communication detected" type="warning" />
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-100">Dashboard Overview</h1>
        <DateRangeSelector onRangeChange={handleDateRangeChange} />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Communications"
          value="10,234"
          change={5.6}
          increasedIsGood={true}
          icon={MessageSquare}
        />
        <MetricCard
          title="Flagged Communications"
          value="1,234"
          change={20.1}
          increasedIsGood={false}
          icon={AlertTriangle}
        />
        <MetricCard title="Employee Messages" value="8,743" change={10.5} increasedIsGood={true} icon={Users} />
        <MetricCard title="Manager Messages" value="1,491" change={18.7} increasedIsGood={true} icon={UserCheck} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-100">Organizational Mood</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            <MoodThermometer sentiment={sentiment} />
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-100">Sentiment Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <SentimentTrend />
          </CardContent>
        </Card>
      </div>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-100">Communication Activity Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <HeatmapChart />
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-100">Frequently Used Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <WordCloud />
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-100">Communications Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Overview />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MetricCard({
  title,
  value,
  change,
  increasedIsGood,
  icon: Icon,
}: { title: string; value: string; change: number; increasedIsGood: boolean; icon: React.ElementType }) {
  const isPositiveChange = change > 0
  const changeColor = isPositiveChange === increasedIsGood ? "text-green-400" : "text-red-400"

  return (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-400">{title}</CardTitle>
        <Icon className="h-4 w-4 text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-100">{value}</div>
        <p className={`text-xs ${changeColor} flex items-center mt-1`}>
          {isPositiveChange ? <ArrowUpIcon size={12} /> : <ArrowDownIcon size={12} />}
          <span className="ml-1">{Math.abs(change)}% from last period</span>
        </p>
      </CardContent>
    </Card>
  )
}

