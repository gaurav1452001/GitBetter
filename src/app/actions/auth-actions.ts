"use server"

import { signIn as nextAuthSignIn } from "@/lib/auth"

export async function signIn() {
    return nextAuthSignIn("google")
}