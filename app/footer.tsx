'use client'
import { GithubIcon, TwitterIcon, LinkedinIcon, HeartIcon } from 'lucide-react'
import { SOCIAL_LINKS } from './data'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto w-full max-w-screen-sm px-4 py-16">
        <div className="rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 p-8 border border-zinc-200/50 dark:border-zinc-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8">
            
            {/* Left column */}
            <div className="text-center sm:text-left space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <img 
                    src="/3e477e83c35e2a7a38f19ccdad163faa.gif" 
                    alt="Profile animation" 
                    className="h-12 w-12 object-cover"
                  />
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      Nima Khabbazi
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">Developer</p>
                  </div>
                </div>
              </div>
              
              {/* Simple social links */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
                    aria-label={`Follow me on ${social.label}`}
                  >
                    {social.label === 'Github' && <GithubIcon className="h-4 w-4" />}
                    {social.label === 'Twitter' && <TwitterIcon className="h-4 w-4" />}
                    {social.label === 'LinkedIn' && <LinkedinIcon className="h-4 w-4" />}
                  </a>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="text-center sm:text-right space-y-3 text-sm">
              <p className="text-zinc-600 dark:text-zinc-400">
                Built with <HeartIcon className="inline h-3 w-3 text-red-500" /> and lots of Tea
              </p>
              
              <p className="text-zinc-500 dark:text-zinc-500">
                Thanks to{' '}
                <a 
                  href="https://x.com/Ibelick" 
                  target="_blank" 
                  className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-2 transition-colors"
                >
                  Ibelick
                </a>
                {' '}for the project
              </p>
              
              <p className="text-zinc-500 dark:text-zinc-500 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                © {new Date().getFullYear()}{' '}
                <a 
                  href="https://www.nimakhabbazi.com" 
                  target="_blank" 
                  className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  @nimausername
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
