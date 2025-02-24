import { Link, Outlet } from 'react-router'

import { Providers } from '@/components/providers'

export function RootLayout() {
  return (
    <Providers>
      <div className='className="grid min-w-svh" grid min-h-svh grid-rows-[auto_1fr]'>
        <header className="w-full border-b border-dashed">
          <div className="container flex items-center border-x border-dashed py-3">
            <Link to="/">
              <strong className="text-sm font-semibold">Saas Monorepo</strong>
            </Link>
          </div>
        </header>
        <main className="grid">
          <Outlet />
        </main>
      </div>
    </Providers>
  )
}
