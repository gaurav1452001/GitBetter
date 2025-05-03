import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Github, Code, Users, Zap, ArrowRight, Search, Star } from "lucide-react"
type Props = {}

const Howitworks = (props: Props) => {
    return (
        <section id="features" className="bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">How GitBetter Works</h2>
                    <p className="mx-auto max-w-2xl text-gray-400">
                        Our AI-powered platform analyzes your skills, interests, and coding patterns to find the perfect open
                        source projects for you to contribute to.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="rounded-lg border border-gray-800 bg-gray-950 p-6">
                        <div className="mb-4 inline-flex rounded-full bg-purple-500/10 p-3 text-purple-400">
                            <Search className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Smart Matching</h3>
                        <p className="text-gray-400">
                            Our AI analyzes your GitHub profile, coding style, and preferences to find projects that match your
                            skills and interests.
                        </p>
                    </div>

                    <div className="rounded-lg border border-gray-800 bg-gray-950 p-6">
                        <div className="mb-4 inline-flex rounded-full bg-emerald-500/10 p-3 text-emerald-400">
                            <Code className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Beginner Friendly</h3>
                        <p className="text-gray-400">
                            Find issues tagged as "good first issue" or "beginner friendly" to start your open source journey with
                            confidence.
                        </p>
                    </div>

                    <div className="rounded-lg border border-gray-800 bg-gray-950 p-6">
                        <div className="mb-4 inline-flex rounded-full bg-amber-500/10 p-3 text-amber-400">
                            <Star className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold">Build Your Portfolio</h3>
                        <p className="text-gray-400">
                            Track your contributions, build your reputation, and showcase your open source work to potential
                            employers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Howitworks