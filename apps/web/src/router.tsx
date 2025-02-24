import { BrowserRouter, Route, Routes } from 'react-router'

import { RootLayout } from './components/root-layout'
import { HomePage } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
