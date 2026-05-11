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

                {/* MOBILE MENU */}
                <div className="dropdown md:hidden">

                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost text-2xl"
                    >
                        ☰
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 space-y-2"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>

                        <li>
                            <Link href="/animals">All Animals</Link>
                        </li>

                        {session && (
                            <li>
                                <Link href="/my-profile">
                                    My Profile
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                {/* LOGO */}
                <Link
                    href="/"
                    className="text-2xl md:text-3xl font-extrabold text-green-600"
                >
                    QurbaniHat
                </Link>
            </div>

            {/* CENTER */}
            <div className="navbar-center hidden md:flex">

                <ul className="menu menu-horizontal gap-6 font-semibold text-[16px]">

                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="/animals">
                            All Animals
                        </Link>
                    </li>

                    {session && (
                        <li>
                            <Link href="/my-profile">
                                My Profile
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

            {/* RIGHT */}
            <div className="navbar-end gap-3">

                {isPending ? (
                    <span className="loading loading-spinner loading-sm"></span>
                ) : session ? (

                    <div className="flex items-center gap-3">

                        {/* USER IMAGE */}
                        <Link href="/my-profile">

                            <img
                                src={
                                    session.user.image ||
                                    "https://i.ibb.co/2kRZp9Z/user.png"
                                }
                                alt="user"
                                className="w-10 h-10 rounded-full border-2 border-green-500 object-cover"
                            />
                        </Link>

                        {/* LOGOUT */}
                        <button
                            onClick={handleSignOut}
                            className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none"
                        >
                            Logout
                        </button>
                    </div>

                ) : (

                    <>
                        <Link
                            href="/login"
                            className="btn btn-sm"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="btn btn-sm btn-success text-white"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}