"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaLock } from "react-icons/fa";

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

    // GOOGLE 
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4">

            <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8">

                {/* TOP */}
                <div className="text-center mb-8">

                    <h1 className="text-4xl font-extrabold text-green-600">
                        QurbaniHat
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Login to continue your journey
                    </p>
                </div>


                <form onSubmit={handleLogin} className="space-y-5">


                    <div>
                        <label className="font-semibold mb-2 block">
                            Email Address
                        </label>

                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full pl-12 h-12 rounded-xl"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>


                    <div>
                        <label className="font-semibold mb-2 block">
                            Password
                        </label>

                        <div className="relative">
                            <FaLock className="absolute left-4 top-4 text-gray-400" />

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full pl-12 h-12 rounded-xl"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>


                    <button className="btn btn-primary w-full h-12 rounded-xl text-lg text-white">
                        Login
                    </button>
                </form>


                <div className="divider my-6">
                    OR
                </div>


                <button
                    onClick={handleGoogle}
                    className="btn btn-outline w-full h-12 rounded-xl text-base"
                >
                    <FcGoogle className="text-2xl" />
                    Continue with Google
                </button>

                {/* REGISTER LINK */}
                <p className="text-center mt-6 text-gray-600">
                    Don’t have an account?{" "}
                    <Link
                        href="/register"
                        className="text-primary font-bold hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
}