"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
    };

    return (
        <div className="navbar bg-base-100 shadow-md px-4 md:px-8">

            {/* LEFT */}
            <div className="navbar-start">
                <Link href="/" className="text-xl font-bold text-primary">
                    QurbaniHat
                </Link>
            </div>

            {/* 🔥 CENTER (NAV LINKS) */}
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-6 font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/animals">All Animals</Link></li>
                </ul>
            </div>

            {/* 🔥 RIGHT (AUTH) */}
            <div className="navbar-end gap-2">

                {isPending ? (
                    <span className="loading loading-spinner loading-sm"></span>
                ) : session ? (
                    <div className="flex items-center gap-3">

                        {/* Avatar */}
                        <img
                            src={session.user.image || "https://i.ibb.co/2kRZp9Z/user.png"}
                            alt="user"
                            className="w-9 h-9 rounded-full border"
                        />

                        {/* Logout */}
                        <button
                            onClick={handleSignOut}
                            className="btn btn-sm btn-error text-white"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <Link href="/login" className="btn btn-sm">
                            Login
                        </Link>

                        <Link href="/register" className="btn btn-sm btn-primary text-white">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}