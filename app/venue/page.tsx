import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building, Clock, Navigation, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function VenuePage() {
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
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="h-12 w-12 text-foreground" />
            <h1 className="text-5xl font-bold text-balance">Venue & Locations</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Navigate through 10 strategic locations across the NUST H-12 campus. Each team follows a unique route of 5
            checkpoints to ensure optimal flow and prevent overcrowding.
          </p>
        </div>
      </section>

      {/* Starting Point */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Event Hub</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-6 w-6" />
                  IAEC Lecture Hall - Central Hub
                </CardTitle>
                <CardDescription>Starting point, briefing, and closing ceremony location</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Event Schedule:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">Opening Briefing:</span>
                        <span className="text-muted-foreground">15 minutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">Team Dispatch:</span>
                        <span className="text-muted-foreground">Staggered every 2-3 minutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">Return Deadline:</span>
                        <span className="text-muted-foreground">2.5 hours after start</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">Closing Ceremony:</span>
                        <span className="text-muted-foreground">30 minutes</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Facilities Available:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Registration and check-in desk</li>
                      <li>• Team assignment and route distribution</li>
                      <li>• Material/resource collection area</li>
                      <li>• Final presentation space</li>
                      <li>• Refreshments and rest area</li>
                      <li>• Lost & found / emergency contact point</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> All teams must return to IAEC Lecture Hall by the specified deadline,
                    regardless of completion status. Late returns may result in point penalties.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Checkpoint Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Checkpoint Locations</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline" className="border-foreground text-foreground">
                      1
                    </Badge>
                    Concordia 02
                  </CardTitle>
                  <CardDescription>Academic building checkpoint</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Location:</strong> Main entrance lobby
                    </div>
                    <div>
                      <strong>Activities:</strong> Logic puzzles, trivia
                    </div>
                    <div>
                      <strong>Volunteers:</strong> 2 stationed
                    </div>
                    <div>
                      <strong>Facilities:</strong> Seating area, restrooms nearby
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline" className="border-foreground text-foreground">
                      2
                    </Badge>
                    UG Block Lobby
                  </CardTitle>
                  <CardDescription>Undergraduate building</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Location:</strong> Central lobby area
                    </div>
                    <div>
                      <strong>Activities:</strong> Physical challenges, communication
                    </div>
                    <div>
                      <strong>Volunteers:</strong> 2 stationed
                    </div>
                    <div>
                      <strong>Facilities:</strong> Open space, good lighting
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline" className="border-foreground text-foreground">
                      3
                    </Badge>
                    SEECS Dolphin Area
                  </CardTitle>
                  <CardDescription>Engineering school landmark</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Location:</strong> Near dolphin statue
                    </div>
                    <div>
                      <strong>Activities:</strong> Observation challenges
                    </div>
                    <div>
                      <strong>Volunteers:</strong> 2 stationed
                    </div>
                    <div>
                      <strong>Facilities:</strong> Outdoor seating, shade
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline" className="border-foreground text-foreground">
                      4
                    </Badge>
                    RIMMS Lobby
                  </CardTitle>
                  <CardDescription>Research institute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Location:</strong> Main entrance lobby
                    </div>
                    <div>
                      <strong>Activities:</strong> Online quizzes, risk & reward
                    </div>
                    <div>
                      <strong>Volunteers:</strong> 1-2 stationed
                    </div>
                    <div>
                      <strong>Facilities:</strong> WiFi access, charging points
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline" className="border-foreground text-foreground">
                      5
                    </Badge>
                    Outside Main Library
                  </CardTitle>
                  <CardDescription>Central campus location</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Location:</strong> Front entrance area
                    </div>
                    <div>
                      <strong>Activities:</strong> Mixed challenges
                    </div>
                    <div>
                      <strong>Volunteers:</strong> 2 stationed
                    </div>
                    <div>
                      <strong>Facilities:</strong> Benches, covered area
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline" className="border-foreground text-foreground">
                      6
                    </Badge>
                    SEECS Backyard
                  </CardTitle>
                  <CardDescription>Engineering building rear</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Location:</strong> Outdoor courtyard
                    </div>
                    <div>
                      <strong>Activities:</strong> Physical challenges
                    </div>
                    <div>
                      <strong>Volunteers:</strong> 2 stationed
                    </div>
                    <div>
                      <strong>Facilities:</strong> Open space, natural lighting
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline" className="border-foreground text-foreground">
                      7
                    </Badge>
                    Rehmet Masjid Parking
                  </CardTitle>
                  <CardDescription>Campus mosque area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Location:</strong> Parking area near mosque
                    </div>
                    <div>
                      <strong>Activities:</strong> Communication challenges
                    </div>
                    <div>
                      <strong>Volunteers:</strong> 1-2 stationed
                    </div>
                    <div>
                      <strong>Facilities:</strong> Quiet environment
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline" className="border-foreground text-foreground">
                      8
                    </Badge>
                    C2 Ground
                  </CardTitle>
                  <CardDescription>Sports and recreation area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Location:</strong> Sports ground area
                    </div>
                    <div>
                      <strong>Activities:</strong> Physical challenges, team building
                    </div>
                    <div>
                      <strong>Volunteers:</strong> 2 stationed
                    </div>
                    <div>
                      <strong>Facilities:</strong> Large open space
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline" className="border-foreground text-foreground">
                      9
                    </Badge>
                    Convocation Ground
                  </CardTitle>
                  <CardDescription>Ceremonial venue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Location:</strong> Main ceremonial ground
                    </div>
                    <div>
                      <strong>Activities:</strong> Final challenges, group activities
                    </div>
                    <div>
                      <strong>Volunteers:</strong> 2 stationed
                    </div>
                    <div>
                      <strong>Facilities:</strong> Amphitheater seating
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation System */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Navigation System</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  QR Code Navigation
                </CardTitle>
                <CardDescription>How teams navigate between checkpoints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">How It Works:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Each team receives a unique starting QR code</li>
                      <li>• Scan QR code at each checkpoint to get next location</li>
                      <li>• QR codes contain location details and activity instructions</li>
                      <li>• Each team follows a different route sequence</li>
                      <li>• Final QR code directs teams back to IAEC Lecture Hall</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Route Management:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 20 teams × 5 checkpoints = optimized flow</li>
                      <li>• No more than 4 teams at any location simultaneously</li>
                      <li>• Staggered start times prevent bottlenecks</li>
                      <li>• Volunteers track team progress</li>
                      <li>• Emergency contact info in each QR code</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold mb-2">Technical Requirements:</h4>
                  <p className="text-sm text-muted-foreground">
                    Teams need at least one smartphone with a QR code scanner app. Most modern phones have built-in QR
                    scanners in the camera app. Backup QR scanners will be available at the central hub if needed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Campus Overview</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>NUST H-12 Campus Layout</CardTitle>
                <CardDescription>Strategic distribution of checkpoints across campus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Campus Zones:</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Academic Zone:</strong> Concordia 02, UG Block, RIMMS
                      </div>
                      <div>
                        <strong>Engineering Zone:</strong> SEECS Dolphin Area, SEECS Backyard
                      </div>
                      <div>
                        <strong>Central Zone:</strong> Main Library, IAEC Lecture Hall
                      </div>
                      <div>
                        <strong>Recreation Zone:</strong> C2 Ground, Convocation Ground
                      </div>
                      <div>
                        <strong>Community Zone:</strong> Rehmet Masjid area
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Distance & Timing:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Average walking time between checkpoints: 5-8 minutes</li>
                      <li>• Maximum campus traverse time: 12 minutes</li>
                      <li>• Total walking distance per team: ~2-3 km</li>
                      <li>• Campus is pedestrian-friendly with clear pathways</li>
                      <li>• All locations are wheelchair accessible</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold mb-2">Emergency Information:</h4>
                  <p className="text-sm text-muted-foreground">
                    Campus security and medical facilities are available throughout the event. Emergency contact numbers
                    will be provided in the opening briefing and included in QR code information. Volunteers at each
                    checkpoint can also assist with any urgent needs.
                  </p>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Explore NUST H-12?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              The treasure hunt will take you through the most iconic and strategic locations across the beautiful NUST
              H-12 campus.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/rules">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  View Complete Rules
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  Back to Event Overview
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
