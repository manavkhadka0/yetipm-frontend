export function ProgressIcon() {
  return (
    <div className="w-16 h-16 md:w-24 md:h-24 mb-8">
      <div className="flex items-end h-full space-x-1">
        {[1, 2, 3, 4, 5].map((height, i) => (
          <div key={i} className="bg-[#336699] w-2 md:w-3" style={{ height: `${height * 20}%` }} />
        ))}
      </div>
    </div>
  )
}

