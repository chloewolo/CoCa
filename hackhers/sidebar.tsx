import Link from "next/link"
import { Home, BarChart2, Mail, MessageSquare, FileText } from "lucide-react"
import type React from "react"

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 h-full border-r border-gray-700">
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-100">HR Dashboard</h1>
      </div>
      <nav className="mt-6">
        <SidebarLink href="/" icon={Home} text="Overview" />
        <SidebarLink href="/trends" icon={BarChart2} text="Trends" />
        <SidebarLink href="/emails" icon={Mail} text="Emails" />
        <SidebarLink href="/texts" icon={MessageSquare} text="Texts" />
        <SidebarLink href="/feedback" icon={FileText} text="Feedback" />
      </nav>
    </div>
  )
}

function SidebarLink({ href, icon: Icon, text }: { href: string; icon: React.ElementType; text: string }) {
  return (
    <Link
      href={href}
      className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200"
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className="text-sm">{text}</span>
    </Link>
  )
}

