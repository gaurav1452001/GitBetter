"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"
type Props = {}

const Navbar = (props: Props) => {
    const session=useSession();
    return (
        <header className="border-b border-gray-800 bg-gray-950">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">GitBetter</span>
                </div>
                <div className="flex items-center gap-4">
                    <div>
                        {session.data?.user&&<Button onClick={()=>signOut()}  variant="outline" className="border-gray-700 text-neutral-900 hover:bg-gray-800 hover:text-white">Sign Out</Button>}
                        {!session.data?.user&&<Button onClick={()=>signIn()}  variant="outline" className="border-gray-700 text-neutral-900 hover:bg-gray-800 hover:text-white">Login</Button>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
