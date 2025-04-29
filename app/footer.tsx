'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

function StatusIndicator() {
  return (
    <div className="flex items-center gap-2 text-xs text-zinc-500">
      <div className="relative flex h-2 w-2">
        <div className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></div>
        <div className="relative h-2 w-2 rounded-full bg-green-500"></div>
      </div>
      <span>Online</span>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-8 min-h-[150px] dark:border-zinc-800 relative overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-extrabold uppercase tracking-widest text-zinc-200 dark:text-zinc-700 opacity-20 whitespace-nowrap z-0"
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }}
      >
        NIMA
      </span>
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <TextLoop className="text-xs text-zinc-500">
            <span>
              <a href="https://github.com/nimausername" target="_blank">© {new Date().getFullYear()} @nimausername.</a>
            </span>
            <span>
              Thanks to <a href="https://x.com/Ibelick" target="_blank" className="underline hover:text-zinc-700 dark:hover:text-zinc-300">Ibelick</a>.
            </span>
          </TextLoop>
        </div>
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <StatusIndicator />
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
