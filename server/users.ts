"use server"

import { auth } from "../lib/auth"; // Adjust the path as necessary

export const signin = async () => {
    await auth.api.signInEmail({
        body: {
            email: "josephukohaobasi@gmail.com",
            password: "password123"
        }
    })
}

    export const signup = async () => {
    await auth.api.signUpEmail({
        body: {
            email: "josephukohaobasi@gmail.com",
            password: "password123",
            name: "Joseph Ukoha Obasi"
        }
    })
}
