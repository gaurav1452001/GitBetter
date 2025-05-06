import { auth } from "@/lib/auth"
import Image from "next/image"

export default async function UserAvatar() {
    const session = await auth()
    if (!session?.user) {
        return null
    }
    return (
        <div>
            <Image 
            src={session.user.image||""} 
            width={40}
            height={40}
            alt="User Avatar" 
            className="rounded-full w-10 h-10 object-cover border-2 border-gray-200 hover:border-gray-300 transition-all"
            />
        </div>
    )
}