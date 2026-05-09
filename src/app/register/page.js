"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Register() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await authClient.signUp.email({
                email,
                password,
                name,
                image, // 
            });

            toast.success("Registration successful!");
            router.push("/login");
        } catch (err) {
            toast.error("Registration failed");
        }
    };

    return (
        <form onSubmit={handleRegister} className="p-6 max-w-md mx-auto space-y-3">

            <h1 className="text-xl font-bold">Register</h1>

            {/* NAME */}
            <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                onChange={(e) => setName(e.target.value)}
                required
            />

            {/* PHOTO URL */}
            <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                onChange={(e) => setImage(e.target.value)}
                required
            />

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
                Register
            </button>
        </form>
    );
}