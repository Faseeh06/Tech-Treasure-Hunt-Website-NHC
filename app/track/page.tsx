"use client"

import { useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const LOCATIONS = [
  "IAEC ground floor lobby",
  "IAEC first floor start of corridor",
  "IAEC first floor end of corridor",
  "RIMMS canopy",
  "IAEC canopy",
] as const

function shuffle<T>(items: readonly T[]): T[] {
  const array = items.slice() as T[]
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default function TrackPage() {
  const order = useMemo(() => shuffle(LOCATIONS), [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-4 border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Map</h1>
          <div className="flex gap-2">
            <Link href="/">
              <Button className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent">
                Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Follow this track order</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-6 space-y-3">
              {order.map((loc, idx) => (
                <li key={loc} className="text-lg">
                  <span className="font-semibold mr-2">Location{idx + 1}:</span>
                  {loc}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
        <p className="mt-6 text-center text-sm text-muted-foreground italic">please take a screenshot with the current time visible to save the map.</p>
      </main>
    </div>
  )
}
