"use client"
import React from "react"
import { useRouter } from "next/navigation"

const Hero = () => {
    const [url, setUrl] = React.useState<string>("");
    const router = useRouter();

    const handleRepo = async () => {
        // Extract the username and reponame from the URL
        const urlParts = url.split("/");
        if (urlParts.length < 5) {
            alert("Please enter a valid GitHub repository URL.");
            return;
        }
        if (url) {
            router.push(`/user/${urlParts[3]}/${urlParts[4]}`);
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
                    GitBetter uses the power of Langchain and LLM's to help you talk to any repository that you want
                </p>
                <div className="mx-auto mb-12 flex max-w-md flex-col gap-4 sm:flex-row">
                    <input
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter the Repository URL"
                        className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 rounded-lg px-3"
                    />
                    <button onClick={() => handleRepo()} className="py-1.5 bg-emerald-500 cursor-pointer rounded-lg px-3 text-white hover:bg-emerald-600">
                        <span>
                            Talk to this Repository
                        </span>
                    </button>
                </div>
                <div className="mb-8 text-lg text-gray-400 md:text-xl">
                    Example Format: https://github.com/gaurav1452001/GitBetter
                </div>
            </div>
        </section>
    )
}

export default Hero