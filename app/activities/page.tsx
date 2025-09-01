"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Target,
  Lightbulb,
  Zap,
  Eye,
  Puzzle,
  Users,
  Clock,
  Trophy,
  ArrowLeft,
  Search,
  Building,
  Calculator,
  ExternalLink,
  Lock,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ActivitiesPage() {
  const [password, setPassword] = useState("")
  const [showPasswordError, setShowPasswordError] = useState(false)

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "NHC") {
      window.open("https://activity1nhc.vercel.app/", "_blank")
      setPassword("")
      setShowPasswordError(false)
    } else {
      setShowPasswordError(true)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-balance">Activities Overview</h1>
              <p className="text-muted-foreground mt-2">
                Detailed breakdown of all treasure hunt activities and challenges
              </p>
            </div>
            <nav className="flex gap-4">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Activity Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Challenge Categories</h2>

          {/* Interactive Riddles */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Puzzle className="h-6 w-6" />
              Interactive Riddles
            </h3>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              <Card className="bg-card border-border border-2 border-dashed">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Puzzle className="h-5 w-5" />
                    Digital Riddle Challenge
                  </CardTitle>
                  <CardDescription>Interactive online puzzle experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Access our interactive riddle platform to solve complex puzzles and brain teasers. This digital
                    challenge will test your logical thinking and problem-solving abilities.
                  </p>
                  <div className="flex items-center gap-4 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>10-15 minutes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>Team collaboration</span>
                    </div>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Access Platform</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Enter the password to access the interactive riddle platform:
                    </p>
                    <form onSubmit={handlePasswordSubmit} className="space-y-3">
                      <div className="flex gap-2">
                        <Input
                          type="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value)
                            setShowPasswordError(false)
                          }}
                          className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                        />
                        <Button
                          type="submit"
                          variant="outline"
                          className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      {showPasswordError && (
                        <p className="text-red-400 text-sm">Incorrect password. Please try again.</p>
                      )}
                    </form>
                    <p className="text-xs text-muted-foreground mt-2">
                      Hint: The password is related to the event organizer's initials.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Observation Challenges */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Eye className="h-6 w-6" />
              Observation Challenges
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Spot the Difference
                  </CardTitle>
                  <CardDescription>Visual perception challenge</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Teams must identify 10 differences between two nearly identical pictures of NUST campus locations.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>2 minutes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>Team effort</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Hidden Object Hunt
                  </CardTitle>
                  <CardDescription>Campus exploration challenge</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Find specific objects or landmarks hidden throughout the NUST H-12 campus using visual clues.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>5 minutes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>Team collaboration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Logic Puzzles */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              Logic Puzzles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Campus Map Grid
                  </CardTitle>
                  <CardDescription>Coordinate-based puzzle</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Use logical clues to determine specific coordinates on the NUST H-12 campus map and locate hidden
                    treasures.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>3 minutes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>Strategic thinking</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Number Sequence
                  </CardTitle>
                  <CardDescription>Mathematical reasoning</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Solve mathematical sequences and patterns to unlock the next clue or checkpoint location.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>4 minutes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>Analytical skills</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Physical Challenges */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              Physical Challenges
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Tower of Terror
                  </CardTitle>
                  <CardDescription>Engineering & speed challenge</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Build the tallest freestanding tower using only 30 plastic cups and sheets of paper within the time
                    limit.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>90 seconds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>Team coordination</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Puzzle className="h-5 w-5" />
                    Assembly Challenge
                  </CardTitle>
                  <CardDescription>Hands-on construction</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Assemble a complex structure or device using provided materials and following cryptic instructions.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>5 minutes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>Problem solving</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Activity Flow */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Activity Distribution</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Checkpoint Activities</CardTitle>
                  <CardDescription>10 campus locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• IAEC Lecture Hall (Start/End)</li>
                    <li>• Library Complex</li>
                    <li>• Engineering Block</li>
                    <li>• Student Center</li>
                    <li>• Sports Complex</li>
                    <li>• Cafeteria Area</li>
                    <li>• Admin Block</li>
                    <li>• Parking Area</li>
                    <li>• Garden/Outdoor Spaces</li>
                    <li>• IT Center</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Activity Types</CardTitle>
                  <CardDescription>Balanced challenge mix</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 30% Observation challenges</li>
                    <li>• 25% Logic puzzles</li>
                    <li>• 20% Physical challenges</li>
                    <li>• 15% Creative tasks</li>
                    <li>• 10% Bonus activities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Scoring System</CardTitle>
                  <CardDescription>Points & time-based</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Completion points: 10-50</li>
                    <li>• Speed bonus: 5-15 points</li>
                    <li>• Creativity bonus: 10-25 points</li>
                    <li>• Team collaboration: 5-20 points</li>
                    <li>• Final presentation: 50-100 points</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Take on the Challenge?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Each activity is designed to test different skills while keeping the experience fun and engaging for all
              participants.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/track-a">
                <Button
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  <Target className="mr-2 h-4 w-4" />
                  View Track A Details
                </Button>
              </Link>
              <Link href="/track-b">
                <Button
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  <Trophy className="mr-2 h-4 w-4" />
                  View Track B Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">© 2024 NUST H-12 Tech Treasure Hunt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
