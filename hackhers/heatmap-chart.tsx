"use client"
import { ResponsiveHeatMap } from "@nivo/heatmap"

const data = [
  {
    day: "Monday",
    "9AM": 23,
    "10AM": 45,
    "11AM": 60,
    "12PM": 35,
    "1PM": 40,
    "2PM": 55,
    "3PM": 70,
    "4PM": 50,
    "5PM": 30,
  },
  {
    day: "Tuesday",
    "9AM": 30,
    "10AM": 50,
    "11AM": 65,
    "12PM": 40,
    "1PM": 45,
    "2PM": 60,
    "3PM": 75,
    "4PM": 55,
    "5PM": 35,
  },
  {
    day: "Wednesday",
    "9AM": 25,
    "10AM": 40,
    "11AM": 55,
    "12PM": 30,
    "1PM": 35,
    "2PM": 50,
    "3PM": 65,
    "4PM": 45,
    "5PM": 25,
  },
  {
    day: "Thursday",
    "9AM": 28,
    "10AM": 48,
    "11AM": 62,
    "12PM": 38,
    "1PM": 42,
    "2PM": 58,
    "3PM": 72,
    "4PM": 52,
    "5PM": 32,
  },
  {
    day: "Friday",
    "9AM": 20,
    "10AM": 38,
    "11AM": 52,
    "12PM": 28,
    "1PM": 32,
    "2PM": 48,
    "3PM": 62,
    "4PM": 42,
    "5PM": 22,
  },
]

export function HeatmapChart() {
  return (
    <div style={{ height: "300px" }}>
      <ResponsiveHeatMap
        data={data}
        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
        valueFormat=">-.2s"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legend: "",
          legendOffset: 46,
        }}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "day",
          legendPosition: "middle",
          legendOffset: 70,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "day",
          legendPosition: "middle",
          legendOffset: -72,
        }}
        colors={{
          type: "sequential",
          scheme: "blues",
        }}
        emptyColor="#555555"
        legends={[
          {
            anchor: "bottom",
            translateX: 0,
            translateY: 30,
            length: 400,
            thickness: 8,
            direction: "row",
            tickPosition: "after",
            tickSize: 3,
            tickSpacing: 4,
            tickOverlap: false,
            tickFormat: ">-.2s",
            title: "Value →",
            titleAlign: "start",
            titleOffset: 4,
          },
        ]}
      />
    </div>
  )
}

