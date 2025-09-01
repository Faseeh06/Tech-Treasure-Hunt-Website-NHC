import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, ArrowRight, Lightbulb, Zap, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function TrackAPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <nav className="flex gap-4">
              <Link href="/track-b">
                <Button
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  Track B
                </Button>
              </Link>
              <Link href="/rules">
                <Button
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  Rules
                </Button>
              </Link>
              <Link href="/venue">
                <Button
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  Venue
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="h-12 w-12 text-foreground" />
            <h1 className="text-5xl font-bold text-balance">Track A: Innovation Challenge</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Navigate campus checkpoints, collect random tech materials, and create an innovative product pitch using
            your collected components.
          </p>
          <div className="flex items-center justify-center gap-4 text-lg">
            <Badge variant="outline" className="border-foreground text-foreground px-4 py-2">
              Treasure Hunt
            </Badge>
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
            <Badge variant="outline" className="border-foreground text-foreground px-4 py-2">
              Material Collection
            </Badge>
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
            <Badge variant="outline" className="border-foreground text-foreground px-4 py-2">
              Product Pitch
            </Badge>
          </div>
        </div>
      </section>

      {/* Track Flow */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Track A Flow</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline" className="border-foreground text-foreground">
                    Phase 1
                  </Badge>
                  Treasure Hunt (90-120 minutes)
                </CardTitle>
                <CardDescription>Navigate 5 checkpoints across NUST H-12 campus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Teams follow a unique route of 5 stations, completing various challenges at each checkpoint.
                  Activities include observation challenges, logic puzzles, physical challenges, communication tasks,
                  and trivia.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Sample Activities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Spot the Difference (2 min)</li>
                      <li>• Campus Map Grid Logic</li>
                      <li>• Tower of Terror Building</li>
                      <li>• Pictionary Relay</li>
                      <li>• NUST Trivia Quiz</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Scoring:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Each activity: 0-5 points</li>
                      <li>• Completion time bonus</li>
                      <li>• Team collaboration score</li>
                      <li>• Risk & reward trivia</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline" className="border-foreground text-foreground">
                    Phase 2
                  </Badge>
                  Material Collection (15 minutes)
                </CardTitle>
                <CardDescription>Collect 5 random materials based on performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Based on treasure hunt performance, teams collect 5 random materials from the material pool.
                  Higher-scoring teams get first pick, but all materials have equal potential for creativity.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Available Materials:</h4>
                    <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                      <span>• DC Motor</span>
                      <span>• Microcontroller</span>
                      <span>• LED Display</span>
                      <span>• Various Sensors</span>
                      <span>• Propeller/Fan</span>
                      <span>• Speaker</span>
                      <span>• Wheels</span>
                      <span>• Buttons/Switches</span>
                      <span>• AI System</span>
                      <span>• Energy Source</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Provided to All:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Breadboard</li>
                      <li>• Connecting wires</li>
                      <li>• Basic circuitry components</li>
                      <li>• Assembly tools</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline" className="border-foreground text-foreground">
                    Phase 3
                  </Badge>
                  Product Pitch (13 minutes total)
                </CardTitle>
                <CardDescription>Brainstorm and pitch your innovative product</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Teams have 10 minutes to brainstorm and create a product concept using their collected materials,
                  followed by a 3-minute pitch to judges.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Brainstorming (10 min):</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Analyze collected materials</li>
                      <li>• Identify potential combinations</li>
                      <li>• Develop product concept</li>
                      <li>• Plan presentation strategy</li>
                      <li>• Create simple prototype/mockup</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Pitch (3 min):</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Product name and purpose</li>
                      <li>• How materials work together</li>
                      <li>• Target market and use cases</li>
                      <li>• Innovation and uniqueness</li>
                      <li>• Team collaboration showcase</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scoring System */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Scoring System</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Track A Scoring Breakdown</CardTitle>
                <CardDescription>How teams are evaluated and ranked</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">60%</div>
                    <h4 className="font-semibold mb-2">Treasure Hunt Performance</h4>
                    <p className="text-sm text-muted-foreground">
                      Activity completion, time bonuses, collaboration, and challenge scores
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">25%</div>
                    <h4 className="font-semibold mb-2">Product Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      Creativity, feasibility, and effective use of collected materials
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">15%</div>
                    <h4 className="font-semibold mb-2">Presentation Quality</h4>
                    <p className="text-sm text-muted-foreground">
                      Pitch clarity, team coordination, and audience engagement
                    </p>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-3">Bonus Points Available:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Speed Bonus:</span>
                      <span className="text-muted-foreground ml-2">+5 points for fastest completion</span>
                    </div>
                    <div>
                      <span className="font-medium">Innovation Bonus:</span>
                      <span className="text-muted-foreground ml-2">+3 points for most creative solution</span>
                    </div>
                    <div>
                      <span className="font-medium">Teamwork Bonus:</span>
                      <span className="text-muted-foreground ml-2">+2 points for exceptional collaboration</span>
                    </div>
                    <div>
                      <span className="font-medium">Risk Taker Bonus:</span>
                      <span className="text-muted-foreground ml-2">+1 point for bold trivia choices</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tips for Track A Success</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Strategy Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    1
                  </Badge>
                  <p className="text-sm">
                    Assign roles: navigator, timekeeper, activity leader, materials expert, presenter
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    2
                  </Badge>
                  <p className="text-sm">Balance speed with accuracy - rushing can cost points</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    3
                  </Badge>
                  <p className="text-sm">Think creatively about material combinations during collection</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    4
                  </Badge>
                  <p className="text-sm">Practice clear communication for the final pitch</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Common Pitfalls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ⚠️
                  </Badge>
                  <p className="text-sm">Don't overthink simple challenges - first instincts are often correct</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ⚠️
                  </Badge>
                  <p className="text-sm">Avoid complex product ideas that can't be explained in 3 minutes</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ⚠️
                  </Badge>
                  <p className="text-sm">Don't ignore team member ideas - collaboration is scored</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ⚠️
                  </Badge>
                  <p className="text-sm">Remember to use ALL collected materials in your product concept</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Innovate?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Track A challenges your team's creativity and problem-solving skills through hands-on innovation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/track-b">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  Compare with Track B
                </Button>
              </Link>
              <Link href="/rules">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  View Complete Rules
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
