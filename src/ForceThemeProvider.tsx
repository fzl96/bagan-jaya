'use client'

import * as React from 'react'

export default function ForceThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
  })

  return <>{children}</>
}
