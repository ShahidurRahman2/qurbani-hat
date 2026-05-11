"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaUserAlt, FaEnvelope, FaLock, FaImage } from "react-icons/fa";

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
                image,
            });

            toast.success("Registration successful!");
            router.push("/login");

        } catch (err) {
            toast.error("Registration failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4 py-10">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

                <div className="text-center mb-8">

                    <h1 className="text-4xl font-extrabold text-green-600">
                        QurbaniHat
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Create your account today
                    </p>
                </div>





                <form
                    onSubmit={handleRegister}
                    className="space-y-5"
                >


                    <div>
                        <label className="font-semibold block mb-2">
                            Full Name
                        </label>

                        <div className="relative">
                            <FaUserAlt className="absolute left-4 top-4 text-gray-400" />

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full pl-12 h-12 rounded-xl"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>


                    <div>
                        <label className="font-semibold block mb-2">
                            Photo URL
                        </label>

                        <div className="relative">
                            <FaImage className="absolute left-4 top-4 text-gray-400" />

                            <input
                                type="text"
                                placeholder="Paste your photo URL"
                                className="input input-bordered w-full pl-12 h-12 rounded-xl"
                                onChange={(e) => setImage(e.target.value)}
                                required
                            />
                        </div>
                    </div>



                    <div>
                        <label className="font-semibold block mb-2">
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

                    {/* PASSWORD */}
                    <div>
                        <label className="font-semibold block mb-2">
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
                        Register
                    </button>
                </form>


                <p className="text-center mt-6 text-gray-600">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-primary font-bold hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}