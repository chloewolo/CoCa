import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const emails = [
  {
    id: 1,
    sender: "john@example.com",
    subject: "Meeting Reminder",
    date: "2023-06-01",
    flagReason: "Potential harassment",
  },
  {
    id: 2,
    sender: "jane@example.com",
    subject: "Project Update",
    date: "2023-06-02",
    flagReason: "Confidential information",
  },
  { id: 3, sender: "bob@example.com", subject: "Complaint", date: "2023-06-03", flagReason: "Aggressive language" },
]

export default function EmailsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-100">Flagged Emails</h1>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-100">Recent Flagged Emails</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-400">Sender</TableHead>
                <TableHead className="text-gray-400">Subject</TableHead>
                <TableHead className="text-gray-400">Date</TableHead>
                <TableHead className="text-gray-400">Flag Reason</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emails.map((email) => (
                <TableRow key={email.id} className="border-gray-700 hover:bg-gray-750">
                  <TableCell className="font-medium text-gray-300">{email.sender}</TableCell>
                  <TableCell className="text-gray-300">{email.subject}</TableCell>
                  <TableCell className="text-gray-300">{email.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-red-900/20 text-red-400 border-red-800/50">
                      {email.flagReason}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

