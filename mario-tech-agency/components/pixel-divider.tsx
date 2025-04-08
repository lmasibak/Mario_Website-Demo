"use client"

export function PixelDivider({
  color = "#ffffff",
  direction = "down",
}: {
  color?: string
  direction?: "up" | "down"
}) {
  // SVG path for the pixelated divider
  const upPath =
    "M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,69.3C672,75,768,117,864,138.7C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"

  const downPath =
    "M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,69.3C672,75,768,117,864,138.7C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

  return (
    <div className="w-full overflow-hidden">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        className="w-full h-16 md:h-24"
        style={{
          transform: direction === "up" ? "rotate(180deg)" : "rotate(0deg)",
          display: "block",
        }}
      >
        <path fill={color} d={direction === "up" ? upPath : downPath} className="pixelated"></path>
      </svg>
    </div>
  )
}
