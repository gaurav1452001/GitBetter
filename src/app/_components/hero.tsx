import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Github, Code, Users, Zap, ArrowRight, Search, Star } from "lucide-react"
type Props = {}

const Hero = (props: Props) => {
    return (
        <section className="container mx-auto px-4 py-20 md:py-32">
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                    Find Your Perfect Open Source <span className="text-emerald-400">Match</span>
                </h1>
                <p className="mb-8 text-lg text-gray-400 md:text-xl">
                    GitBetter uses AI to connect developers with open source projects that match their skills and interests,
                    while helping maintainers find the contributors they need.
                </p>
                <div className="mx-auto mb-12 flex max-w-md flex-col gap-4 sm:flex-row">
                    <Input
                        placeholder="What technologies are you interested in?"
                        className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500"
                    />
                    <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
                        Find Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero