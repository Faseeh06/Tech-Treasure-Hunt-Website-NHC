import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy, Clock, Building, Target, Lightbulb, Zap, Gamepad2 } from "lucide-react"
import Link from "next/link"

export default function TreasureHuntPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/hc.png" alt="Logo" className="h-12 w-auto" />
              <h1 className="text-3xl font-bold text-balance">Tech Treasure Hunt</h1>
            </div>
            <nav className="flex gap-4">
              <Link href="/track-a">
                <Button
                  className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  Track A
                </Button>
              </Link>
              <Link href="/track-b">
                <Button
                  className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  Track B
                </Button>
              </Link>
              <Link href="/activities">
                <Button
                  className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  Activities
                </Button>
              </Link>
              <Link href="/rules">
                <Button
                  className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  Rules
                </Button>
              </Link>
              <Link href="/venue">
                <Button
                  className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
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
          <h2 className="text-5xl font-bold mb-6 text-balance">Two Tracks, One Epic Adventure</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Experience an immersive treasure hunt with two synchronized tracks running in parallel. Teams of five will
            compete in activities that test creativity, problem-solving, collaboration, and adaptability across the NUST
            H-12 campus.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/track-a">
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Target className="mr-2 h-4 w-4" />
                Track A: Product Pitch
              </Button>
            </Link>
            <Link href="/track-b">
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Gamepad2 className="mr-2 h-4 w-4" />
                Track B: Market Simulation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Event Details</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background border-border">
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-foreground" />
                <CardTitle>Duration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold">2.5 - 3 Hours</p>
                <p className="text-muted-foreground">Including intro & closing</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader className="text-center">
                <Building className="h-8 w-8 mx-auto mb-2 text-foreground" />
                <CardTitle>Starting Point</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold">IAEC Lecture Hall</p>
                <p className="text-muted-foreground">NUST H-12 Campus</p>
                <p className="text-muted-foreground">Central Hub</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-foreground" />
                <CardTitle>Participants</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold">100 Students</p>
                <p className="text-muted-foreground">20 teams of 5 members</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader className="text-center">
                <Trophy className="h-8 w-8 mx-auto mb-2 text-foreground" />
                <CardTitle>Competition</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold">Top 3 Teams</p>
                <p className="text-muted-foreground">Win prizes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Adventure</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border hover:bg-muted/20 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Target className="h-6 w-6" />
                  Track A: Innovation Challenge
                </CardTitle>
                <CardDescription>Treasure Hunt → Material Collection → Product Pitch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Navigate campus checkpoints, collect random tech materials, and create an innovative product pitch
                  using your collected components.
                </p>
                <Link href="/track-a">
                  <Button
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    Learn More About Track A
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:bg-muted/20 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Gamepad2 className="h-6 w-6" />
                  Track B: Business Strategy
                </CardTitle>
                <CardDescription>Initial Pitch → Resource Hunt → Market Simulation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Start with a business pitch, collect strategic resources, and compete in a dynamic market simulation
                  to grow your venture.
                </p>
                <Link href="/track-b">
                  <Button
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    Learn More About Track B
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Challenge Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Spot the Difference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Find 10 differences in NUST campus pictures within 2 minutes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Campus Map Grid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Use logic clues to find coordinates on the NUST H-12 campus map.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Tower of Terror
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Build the tallest tower using 30 cups and paper in 90 seconds.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/rules">
              <Button
                className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                View All Activities & Rules
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for the Ultimate Tech Adventure?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join 100 incoming NUST students in this innovative treasure hunt that combines creativity,
              problem-solving, and strategic thinking across two exciting tracks.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Register Your Team
              </Button>
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Contact Organizers
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">© 2024 NUST H-12 Tech Treasure Hunt. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
