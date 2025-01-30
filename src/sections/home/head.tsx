import { Button } from "@/components/ui/button"
import { WrenchIcon } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 right-0 z-50 p-4">
      <div className="flex gap-2">
        <Button className="bg-green-700 hover:bg-green-800 text-white">$ Pay Rent</Button>
        <Button variant="secondary" className="bg-gray-700 hover:bg-gray-800 text-white">
          <WrenchIcon className="mr-2 h-4 w-4" />
          Maintenance
        </Button>
      </div>
    </header>
  )
}

