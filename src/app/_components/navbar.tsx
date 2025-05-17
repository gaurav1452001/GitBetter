import { SignIn} from "@/app/_components/auth/signin-button"
import { SignOut} from "@/app/_components/auth/signout-button"
import UserAvatar from "./userProfile"
import { auth } from "@/lib/auth"

const Navbar = async() => {
    const session = await auth()
    const isAuthenticated = !!session
    
    return (
        <header className="border-b border-gray-800 bg-gray-950">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white">GitBetter</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 flex-row">
                        {!isAuthenticated ? (
                            <SignIn />
                        ) : (
                            <>
                                <SignOut />
                                <UserAvatar />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
