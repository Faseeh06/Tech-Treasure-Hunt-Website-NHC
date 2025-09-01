import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, ArrowRight, TrendingUp, DollarSign, Star, Wrench, Handshake, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function TrackBPage() {
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
              <Link href="/track-a">
                <Button
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  Track A
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
            <Gamepad2 className="h-12 w-12 text-foreground" />
            <h1 className="text-5xl font-bold text-balance">Track B: Business Strategy</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Start with a business pitch, collect strategic resources through campus challenges, and compete in a dynamic
            market simulation to grow your venture.
          </p>
          <div className="flex items-center justify-center gap-4 text-lg">
            <Badge variant="outline" className="border-foreground text-foreground px-4 py-2">
              Initial Pitch
            </Badge>
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
            <Badge variant="outline" className="border-foreground text-foreground px-4 py-2">
              Resource Hunt
            </Badge>
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
            <Badge variant="outline" className="border-foreground text-foreground px-4 py-2">
              Market Simulation
            </Badge>
          </div>
        </div>
      </section>

      {/* Track Flow */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Track B Flow</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline" className="border-foreground text-foreground">
                    Phase 1
                  </Badge>
                  Initial Business Pitch (15 minutes)
                </CardTitle>
                <CardDescription>Present a random business idea to judges</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Teams draw a random business idea from a pool and have 10 minutes to prepare a 2-minute pitch. This
                  initial performance determines starting resources for the market simulation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Preparation (10 min):</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Analyze the business idea</li>
                      <li>• Identify target market</li>
                      <li>• Develop value proposition</li>
                      <li>• Plan presentation structure</li>
                      <li>• Assign speaking roles</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Pitch Content (2 min):</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Business concept overview</li>
                      <li>• Target audience and market</li>
                      <li>• Unique selling proposition</li>
                      <li>• Revenue model basics</li>
                      <li>• Team strengths</li>
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
                  Resource Hunt (90-120 minutes)
                </CardTitle>
                <CardDescription>Collect strategic business resources across campus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Teams navigate 5 checkpoints, completing the same challenges as Track A, but collect business
                  resources instead of materials. Performance affects resource quality and quantity.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Available Resources:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        <span className="text-sm">Capital (0-5 units)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        <span className="text-sm">Reputation (0-5 units)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wrench className="h-4 w-4" />
                        <span className="text-sm">Technology (0-5 units)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Handshake className="h-4 w-4" />
                        <span className="text-sm">Partnerships (0-5 units)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm">Market Position (0-5 units)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Resource Dynamics:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Higher activity scores = more resources</li>
                      <li>• Each resource affects market simulation</li>
                      <li>• Strategic combinations unlock bonuses</li>
                      <li>• Risk/reward choices impact totals</li>
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
                  Market Simulation (30 minutes)
                </CardTitle>
                <CardDescription>Compete in dynamic business scenarios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Teams use collected resources to navigate market scenarios, make strategic decisions, and compete for
                  market dominance in a fast-paced simulation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Simulation Elements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Market opportunity cards</li>
                      <li>• Crisis management scenarios</li>
                      <li>• Competitive bidding rounds</li>
                      <li>• Partnership negotiations</li>
                      <li>• Innovation challenges</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Resource Usage:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Capital: Fund expansion & operations</li>
                      <li>• Reputation: Build customer trust</li>
                      <li>• Technology: Innovate & compete</li>
                      <li>• Partnerships: Access new markets</li>
                      <li>• Market Position: Defend territory</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resource System */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Resource System</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Capital
                  </CardTitle>
                  <CardDescription>Financial resources for growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Increases with smart strategy and successful ventures. Decreases with poor decisions and market
                    losses.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Uses:</strong> Fund expansion, acquire assets, weather crises
                    </div>
                    <div>
                      <strong>Gains:</strong> Successful deals, market wins, efficiency
                    </div>
                    <div>
                      <strong>Losses:</strong> Failed investments, market crashes
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Reputation
                  </CardTitle>
                  <CardDescription>Brand trust and credibility</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Grows with customer trust and ethical decisions. Falls with scandals and poor customer service.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Uses:</strong> Win customer loyalty, attract partners
                    </div>
                    <div>
                      <strong>Gains:</strong> Quality service, ethical choices
                    </div>
                    <div>
                      <strong>Losses:</strong> Scandals, broken promises
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Technology
                  </CardTitle>
                  <CardDescription>Innovation and technical capability</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Advances with R&D investment and innovation. Lags with poor performance and outdated systems.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Uses:</strong> Innovate products, improve efficiency
                    </div>
                    <div>
                      <strong>Gains:</strong> R&D success, tech partnerships
                    </div>
                    <div>
                      <strong>Losses:</strong> Failed innovation, obsolescence
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Handshake className="h-5 w-5" />
                    Partnerships
                  </CardTitle>
                  <CardDescription>Strategic alliances and networks</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Strengthen with successful collaborations. Weaken with failed deals and broken trust.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Uses:</strong> Access new markets, share resources
                    </div>
                    <div>
                      <strong>Gains:</strong> Successful collaborations
                    </div>
                    <div>
                      <strong>Losses:</strong> Failed partnerships, conflicts
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Market Position
                  </CardTitle>
                  <CardDescription>Competitive advantage and market share</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Expands with smart strategic moves. Shrinks with competitive setbacks and market losses.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Uses:</strong> Defend territory, expand reach
                    </div>
                    <div>
                      <strong>Gains:</strong> Market victories, customer acquisition
                    </div>
                    <div>
                      <strong>Losses:</strong> Competitive defeats, market exit
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring System */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Scoring System</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle>Track B Scoring Breakdown</CardTitle>
                <CardDescription>How teams are evaluated and ranked</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">40%</div>
                    <h4 className="font-semibold mb-2">Resource Hunt Performance</h4>
                    <p className="text-sm text-muted-foreground">
                      Activity completion, resource collection, and challenge scores
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">35%</div>
                    <h4 className="font-semibold mb-2">Market Simulation Results</h4>
                    <p className="text-sm text-muted-foreground">
                      Strategic decisions, resource management, and final market position
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">25%</div>
                    <h4 className="font-semibold mb-2">Initial Pitch Quality</h4>
                    <p className="text-sm text-muted-foreground">
                      Business concept clarity, presentation skills, and strategic thinking
                    </p>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-3">Market Simulation Scoring:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Resource Efficiency:</span>
                      <span className="text-muted-foreground ml-2">How well resources are utilized</span>
                    </div>
                    <div>
                      <span className="font-medium">Strategic Decisions:</span>
                      <span className="text-muted-foreground ml-2">Quality of business choices</span>
                    </div>
                    <div>
                      <span className="font-medium">Adaptability:</span>
                      <span className="text-muted-foreground ml-2">Response to market changes</span>
                    </div>
                    <div>
                      <span className="font-medium">Final Market Share:</span>
                      <span className="text-muted-foreground ml-2">End-game competitive position</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tips for Track B Success</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Strategy Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    1
                  </Badge>
                  <p className="text-sm">Focus on balanced resource collection - don't neglect any category</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    2
                  </Badge>
                  <p className="text-sm">Think long-term in market simulation - short-term gains can backfire</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    3
                  </Badge>
                  <p className="text-sm">Adapt your initial business idea based on collected resources</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    4
                  </Badge>
                  <p className="text-sm">Collaborate on market decisions - diverse perspectives win</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5" />
                  Common Pitfalls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ⚠️
                  </Badge>
                  <p className="text-sm">Don't hoard resources - use them strategically in simulation</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ⚠️
                  </Badge>
                  <p className="text-sm">Avoid over-aggressive strategies that damage reputation</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ⚠️
                  </Badge>
                  <p className="text-sm">Don't ignore partnership opportunities in favor of solo play</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ⚠️
                  </Badge>
                  <p className="text-sm">Remember that market conditions change - stay flexible</p>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Dominate the Market?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Track B challenges your team's strategic thinking and business acumen through competitive market dynamics.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/track-a">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  Compare with Track A
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
