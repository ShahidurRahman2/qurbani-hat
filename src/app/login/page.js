"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await authClient.signIn.email({
                email,
                password,
            });

            toast.success("Login successful!");
            router.push("/");
        } catch (err) {
            toast.error("Invalid email or password");
        }
    };

    // ⚠️ Google login (optional if better-auth supports)
    const handleGoogle = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
            });

            toast.success("Google Login successful!");
            router.push("/");
        } catch (err) {
            toast.error("Google login failed");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">

            <h1 className="text-2xl font-bold mb-4 text-center">
                Login
            </h1>

            <form onSubmit={handleLogin} className="space-y-3">

                {/* EMAIL */}
                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* PASSWORD */}
                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button className="btn btn-primary w-full">
                    Login
                </button>
            </form>

            {/* GOOGLE LOGIN */}
            <button
                onClick={handleGoogle}
                className="btn btn-outline w-full mt-3"
            >
                Continue with Google
            </button>

            {/* REGISTER LINK */}
            <p className="text-center mt-4">
                Don’t have an account?{" "}
                <Link href="/register" className="text-blue-500">
                    Register
                </Link>
            </p>

        </div>
    );
}