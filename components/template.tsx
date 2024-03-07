import React, {CSSProperties} from "react"

export const Template = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  )
}
