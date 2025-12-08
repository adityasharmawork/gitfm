import Link from "next/link"
import { Coffee } from "lucide-react" // Assuming you use lucide-react

export function BuyMeACoffeeWidget() {
  return (
    <Link
      href="https://www.buymeacoffee.com/developeradityasharma"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-[#FF813F] px-4 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#FF813F]/90 active:scale-95"
    >
      <Coffee className="h-5 w-5 fill-current" />
      <span className="font-semibold text-sm">Buy me a coffee</span>
    </Link>
  )
}