"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Code, Users, Zap, ArrowRight, Search, Star } from "lucide-react"
import { useRouter } from "next/navigation"

const Hero =() => {
    const [username, setUsername] = React.useState<string>("");
    const router = useRouter();
    const handleUser = async() => {
        // Handle user input and redirect to the user page
        if (username) {
            router.push(`/user/${username}`);
        } else {
            alert("Please enter a GitHub username.");
        }
    }

    return (
        <section className="container mx-auto px-4 py-20 md:py-32 min-h-screen">
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                    Git<span className="text-emerald-400">Better</span>
                </h1>
                <p className="mb-8 text-lg text-gray-400 md:text-xl">
                    GitBetter uses AI to connect developers with open source projects that match their skills and interests,
                    while helping maintainers find the contributors they need.
                </p>
                    <form onSubmit={(e) => { e.preventDefault(); handleUser(); }} className="flex items-center justify-center gap-4">
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter Your Github Username"
                        className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500"
                    />
                    <button type="submit" className="bg-emerald-500 cursor-pointer text-white hover:bg-emerald-600">
                        Find Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Hero