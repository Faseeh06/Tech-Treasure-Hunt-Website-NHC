import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Trophy, AlertTriangle, CheckCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function RulesPage() {
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
          <h1 className="text-5xl font-bold mb-6 text-balance">Rules & Guidelines</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Complete rules, activity details, and guidelines for the NUST H-12 Tech Treasure Hunt. Please read carefully
            to ensure fair play and maximum enjoyment.
          </p>
        </div>
      </section>

      {/* General Rules */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">General Rules</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Team Formation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    1
                  </Badge>
                  <p>Teams must consist of exactly 5 members from incoming NUST students</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    2
                  </Badge>
                  <p>All team members must participate in all activities</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    3
                  </Badge>
                  <p>Teams cannot be changed once the event begins</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    4
                  </Badge>
                  <p>Each team will be assigned a unique team number and route</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Time Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    1
                  </Badge>
                  <p>Total event duration: 2.5 - 3 hours including briefing and closing</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    2
                  </Badge>
                  <p>Each activity has a specific time limit that must be respected</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    3
                  </Badge>
                  <p>Late arrivals to checkpoints may result in point deductions</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    4
                  </Badge>
                  <p>Teams must return to IAEC Lecture Hall by the specified end time</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activity Rules */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Activity Rules</h2>
          <div className="max-w-6xl mx-auto space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Observation Challenge: "Spot the Difference"</CardTitle>
                <CardDescription>Find differences in NUST campus images</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Rules:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Time limit: 2 minutes</li>
                      <li>• Find all 10 differences between two images</li>
                      <li>• Mark differences clearly on provided sheet</li>
                      <li>• No electronic devices allowed</li>
                      <li>• Team members can collaborate</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scoring:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 0.5 points per correct difference found</li>
                      <li>• Maximum 5 points total</li>
                      <li>• No penalty for incorrect markings</li>
                      <li>• Bonus +1 point for finding all 10 within 90 seconds</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Logic Puzzle: "Campus Map Grid"</CardTitle>
                <CardDescription>Navigate using logical deduction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Rules:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use provided clues to find coordinates</li>
                      <li>• Grid overlay on NUST H-12 campus map</li>
                      <li>• Work through clues systematically</li>
                      <li>• Final answer must be specific grid coordinate</li>
                      <li>• Show working for partial credit</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scoring:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 5 points for correct final coordinate</li>
                      <li>• 2-3 points for partially correct working</li>
                      <li>• 1 point for logical approach shown</li>
                      <li>• 0 points for no attempt or random guess</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Physical Challenge: "Tower of Terror"</CardTitle>
                <CardDescription>Build the tallest freestanding tower</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Rules:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Time limit: 90 seconds</li>
                      <li>• Materials: 30 plastic cups + 1 sheet of paper</li>
                      <li>• Tower must be freestanding (no external support)</li>
                      <li>• Must remain standing for 10 seconds after time ends</li>
                      <li>• All team members must participate</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scoring:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 1 point per 10cm of height</li>
                      <li>• Maximum 5 points (50cm+ tower)</li>
                      <li>• Must be freestanding to score</li>
                      <li>• Bonus +1 point for creative use of paper</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Communication Challenge: "Pictionary Relay"</CardTitle>
                <CardDescription>Team drawing and guessing relay</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Rules:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Time limit: 3-4 minutes total</li>
                      <li>• One person draws, others guess</li>
                      <li>• Rotate drawer after each correct guess</li>
                      <li>• No words, letters, or numbers in drawings</li>
                      <li>• No verbal clues from drawer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scoring:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 1 point per word correctly guessed</li>
                      <li>• Maximum 5 points</li>
                      <li>• Bonus +1 point if all team members draw</li>
                      <li>• Words range from easy to challenging</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Timed Online Quiz</CardTitle>
                <CardDescription>NUST trivia and general knowledge</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Rules:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Scan QR code to access Google Form</li>
                      <li>• One device per team</li>
                      <li>• Team can discuss answers</li>
                      <li>• Submit before time expires</li>
                      <li>• Mix of NUST trivia, logic, and pop culture</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scoring:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 1 point per correct answer</li>
                      <li>• Typically 5-7 questions</li>
                      <li>• Maximum 5 points (scaled if more questions)</li>
                      <li>• Partial credit for close answers where applicable</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Risk & Reward Trivia</CardTitle>
                <CardDescription>Strategic question answering</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Rules:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Choose bet level before hearing question</li>
                      <li>• Safe Bet: +1 point if correct, 0 if wrong</li>
                      <li>• Risky Bet: +3 points if correct, -1 if wrong</li>
                      <li>• Team must agree on bet level</li>
                      <li>• Usually 3-5 questions per checkpoint</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Strategy:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Assess team knowledge before betting</li>
                      <li>• Consider current score position</li>
                      <li>• Balance risk vs. guaranteed points</li>
                      <li>• Questions vary in difficulty</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conduct Rules */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conduct & Fair Play</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Expected Behavior
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ✓
                  </Badge>
                  <p>Respect all volunteers, staff, and fellow participants</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ✓
                  </Badge>
                  <p>Follow all campus rules and regulations</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ✓
                  </Badge>
                  <p>Maintain team integrity throughout the event</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ✓
                  </Badge>
                  <p>Report any issues or concerns to volunteers immediately</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ✓
                  </Badge>
                  <p>Help maintain a positive, inclusive environment</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Prohibited Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ✗
                  </Badge>
                  <p>Cheating, sharing answers, or helping other teams</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ✗
                  </Badge>
                  <p>Using unauthorized electronic devices during activities</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ✗
                  </Badge>
                  <p>Disruptive behavior or unsportsmanlike conduct</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ✗
                  </Badge>
                  <p>Damaging campus property or provided materials</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1 border-foreground text-foreground">
                    ✗
                  </Badge>
                  <p>Leaving designated areas without volunteer permission</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Volunteer Guidelines</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>For Event Volunteers</CardTitle>
                <CardDescription>Guidelines for checkpoint volunteers and event staff</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Responsibilities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Explain activity rules clearly to each team</li>
                      <li>• Monitor fair play and time limits</li>
                      <li>• Record team performance and scores</li>
                      <li>• Distribute materials/resources based on performance</li>
                      <li>• Guide teams to their next checkpoint</li>
                      <li>• Report any issues to event coordinators</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Scoring Guidelines:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Be consistent in scoring across all teams</li>
                      <li>• Award partial credit where appropriate</li>
                      <li>• Consider team collaboration in scoring</li>
                      <li>• Document any unusual circumstances</li>
                      <li>• Encourage teams while maintaining fairness</li>
                      <li>• Keep accurate time records</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold mb-2">Emergency Procedures:</h4>
                  <p className="text-sm text-muted-foreground">
                    In case of any emergency, injury, or serious issue, immediately contact the event coordinators via
                    the provided communication channel. Do not leave your station unattended unless it's a genuine
                    emergency.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prizes & Recognition */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Prizes & Recognition</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Awards & Recognition
                </CardTitle>
                <CardDescription>How teams will be recognized for their achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">🥇</div>
                    <h4 className="font-semibold mb-2">1st Place</h4>
                    <p className="text-sm text-muted-foreground">Top overall score across both tracks</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">🥈</div>
                    <h4 className="font-semibold mb-2">2nd Place</h4>
                    <p className="text-sm text-muted-foreground">Second highest overall score</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">🥉</div>
                    <h4 className="font-semibold mb-2">3rd Place</h4>
                    <p className="text-sm text-muted-foreground">Third highest overall score</p>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-3">Special Recognition:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Most Innovative Solution:</span>
                      <span className="text-muted-foreground ml-2">Track A product creativity</span>
                    </div>
                    <div>
                      <span className="font-medium">Best Strategic Thinking:</span>
                      <span className="text-muted-foreground ml-2">Track B market simulation</span>
                    </div>
                    <div>
                      <span className="font-medium">Best Team Collaboration:</span>
                      <span className="text-muted-foreground ml-2">Outstanding teamwork</span>
                    </div>
                    <div>
                      <span className="font-medium">Spirit of the Hunt:</span>
                      <span className="text-muted-foreground ml-2">Enthusiasm and sportsmanship</span>
                    </div>
                  </div>
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
            <h3 className="text-2xl font-bold mb-4">Questions About the Rules?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have any questions about the rules or need clarification, please contact the event organizers
              before the event begins.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/track-a">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  Track A Details
                </Button>
              </Link>
              <Link href="/track-b">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  Track B Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
