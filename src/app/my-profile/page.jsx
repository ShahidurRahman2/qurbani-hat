"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function MyProfile() {
    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!session) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-3xl font-bold">Please Login First</h2>
                <Link href="/login" className="btn btn-primary mt-4">
                    Login
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="card bg-base-100 shadow-xl p-6 text-center">

                <img
                    src={session.user.image}
                    alt="profile"
                    className="w-28 h-28 rounded-full mx-auto border-4 border-green-500"
                />

                <h2 className="text-2xl font-bold mt-4">
                    {session.user.name}
                </h2>

                <p className="text-gray-500">
                    {session.user.email}
                </p>

                <Link
                    href="/update-profile"
                    className="btn btn-success mt-6"
                >
                    Update Profile
                </Link>
            </div>
        </div>
    );
}