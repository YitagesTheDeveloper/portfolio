import React from 'react'

const Avatar = ({ src = '/profile.jpg', alt = 'Profile photo' }) => (
  <div className="relative mx-auto w-full max-w-[360px] animate-[float-slow_8s_ease-in-out_infinite]">
    <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(252,172,21,0.25),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(254,126,3,0.35),transparent_45%)] blur-3xl" />
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-3 text-sm text-white">
        <span className="font-semibold">Adama, Ethiopia</span>
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-slate-900 accent-pill">Available</span>
      </div>
    </div>
  </div>
)

export default Avatar

