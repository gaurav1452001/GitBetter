import Link from "next/link"
type Props = {}

const Footer = (props: Props) => {
    return (

        <footer className="border-t border-gray-800 bg-gray-950 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">GitBetter</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <Link href="#" className="hover:text-white">
                            About
                        </Link>
                        <Link href="#" className="hover:text-white">
                            Features
                        </Link>
                        <Link href="#" className="hover:text-white">
                            Pricing
                        </Link>
                        <Link href="#" className="hover:text-white">
                            Blog
                        </Link>
                        <Link href="#" className="hover:text-white">
                            Contact
                        </Link>
                    </div>
                    <div className="text-sm text-gray-500">
                        © {new Date().getFullYear()} GitBetter. 
                        Built by Gaurav.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer