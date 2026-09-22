import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Home', enabled: true },
  { to: '/destinations', label: 'Destinations', enabled: false },
  { to: '/itineraries', label: 'Itineraries', enabled: false },
  { to: '/tips', label: 'Travel tips', enabled: false },
  { to: '/about', label: 'About', enabled: false },
  { to: '/assistant', label: 'AI assistant', enabled: false },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <NavLink to="/" className="text-base font-semibold text-teal-dark">
          Myanmar Travel Assistant
        </NavLink>

        <button
          type="button"
          className="rounded-md border border-stone-300 px-3 py-1.5 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <nav
          id="primary-nav"
          className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-stone-200 bg-cream px-4 py-3 md:static md:flex md:flex-row md:items-center md:gap-4 md:border-0 md:bg-transparent md:p-0`}
        >
          {NAV_ITEMS.map((item) =>
            item.enabled ? (
              <NavLink
                key={item.to}
                to={item.to}
                className="rounded-md px-2 py-1 text-sm font-medium text-teal-dark"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ) : (
              <span
                key={item.to}
                className="rounded-md px-2 py-1 text-sm text-stone-400"
                title="This page will be added in a later phase"
              >
                {item.label}
              </span>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
