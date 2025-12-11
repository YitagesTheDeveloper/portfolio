import React from 'react'

const MetricList = ({ items }) => (
  <ul className="space-y-2 text-sm text-white/80">
    {items.map((item) => (
      <li key={item} className="flex gap-2">
        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(254,126,3,0.7)]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

export default MetricList

