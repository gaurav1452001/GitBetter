import { signOut } from "@/lib/auth"

export function SignOut() {
    return (
        <form
            action={async () => {
                "use server"
                await signOut()
            }}
        >
            <button
                type="submit"
                className="px-3 py-1.5 rounded-md font-medium transition-colors duration-200 
                         bg-white border border-gray-300 shadow-sm
                         text-gray-800
                         hover:bg-emerald-500 hover:text-white hover:border-emerald-600
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 cursor-pointer"
            >
                Sign Out
            </button>
        </form>
    )
}