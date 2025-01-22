import { CountdownTimer } from "@/components/commingsoon/soon/counter"
import { ProgressIcon } from "@/components/commingsoon/soon/chart"

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="text-center max-w-4xl mx-auto">
        <ProgressIcon />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">PROGRESS IS COMING SOON</h1>

        <p className="text-lg md:text-xl text-gray-600 mb-12">It&apos;s almost ready... honest</p>

        <CountdownTimer />
      </div>
    </main>
  )
}

