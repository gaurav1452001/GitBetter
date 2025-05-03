import Link from "next/link"
import { Button } from "@/components/ui/button"
type Props = {}

const Navbar = (props: Props) => {
    return (
        <header className="border-b border-gray-800 bg-gray-950">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">GitBetter</span>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#features" className="text-sm text-gray-300 hover:text-white">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white">
                        How It Works
                    </Link>
                    <Link href="#testimonials" className="text-sm text-gray-300 hover:text-white">
                        Testimonials
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/dashboard">
                        <Button variant="outline" className="border-gray-700 text-neutral-900 hover:bg-gray-800 hover:text-white">
                            Log In
                        </Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button className="bg-emerald-500 text-white hover:bg-emerald-600">Get Started</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar
