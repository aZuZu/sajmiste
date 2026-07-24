import React from 'react'

type PlaceholderProps = {
  width?: number
  height?: number
  text?: string
  backgroundColor?: string
}

export default function ImagePlaceholder({
  width = 800,
  height = 600,
  text = 'Slika',
  backgroundColor = '#F3F4F6'
}: PlaceholderProps) {
  const textX = width / 2
  const textY = height / 2

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={text}
    >
      <rect width={width} height={height} fill={backgroundColor} />
      <g transform={`translate(${textX},${textY})`}>
        <text
          x="0"
          y="0"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
          fill="#D1D5DB"
          fontFamily="Inter, sans-serif"
        >
          {text}
        </text>
      </g>
    </svg>
  )
}
