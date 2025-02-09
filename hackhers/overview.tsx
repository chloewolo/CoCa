"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  { name: "Jan", total: 1000, flagged: 50, employee: 800, manager: 200 },
  { name: "Feb", total: 1200, flagged: 60, employee: 950, manager: 250 },
  { name: "Mar", total: 1500, flagged: 75, employee: 1200, manager: 300 },
  { name: "Apr", total: 1800, flagged: 90, employee: 1400, manager: 400 },
  { name: "May", total: 2000, flagged: 100, employee: 1600, manager: 400 },
  { name: "Jun", total: 2200, flagged: 110, employee: 1800, manager: 400 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip
          contentStyle={{
            background: "rgba(17, 24, 39, 0.8)",
            border: "none",
            borderRadius: "4px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          itemStyle={{ color: "#e5e7eb" }}
          cursor={{ fill: "rgba(107, 114, 128, 0.15)" }}
        />
        <Legend />
        <Bar dataKey="total" name="Total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="flagged" name="Flagged" fill="#ef4444" radius={[4, 4, 0, 0]} />
        <Bar dataKey="employee" name="Employee" fill="#10b981" radius={[4, 4, 0, 0]} />
        <Bar dataKey="manager" name="Manager" fill="#f59e0b" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

