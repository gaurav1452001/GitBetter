import { signIn } from "@/lib/auth"

export function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn()
            }}
        >
            <button
                type="submit"
                className="px-4 py-2 rounded-md font-medium transition-colors duration-200 
                         bg-white border border-gray-300 shadow-sm
                         text-gray-800
                         hover:bg-emerald-500 hover:text-white hover:border-emerald-600
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 cursor-pointer"
            >
                Sign in
            </button>
        </form>
    )
}