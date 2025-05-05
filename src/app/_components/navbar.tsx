"use client"
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
    const session = useSession();
    return (
        <header className="border-b border-gray-800 bg-gray-950">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">GitBetter</span>
                </div>
                <div className="flex items-center gap-4">
                    <div>
                        {session.data?.user && (
                            <div className="flex flex-row items-center gap-4">
                                <Button onClick={() => signOut()} variant="outline" className="border-gray-700 text-neutral-900 hover:bg-gray-800 hover:text-white">Sign Out</Button>
                                <img className="rounded-full border-3 border-neutral-500" src={session.data.user.image||""} alt="pic" width={40} height={40}/>
                            </div>)}
                        {!session.data?.user && <Button onClick={() => signIn()} variant="outline" className="cursor-pointer border-gray-700 text-neutral-900 hover:bg-emerald-500 hover:text-white ">Login</Button>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
