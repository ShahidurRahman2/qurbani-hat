"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow px-6">

            {/* LEFT */}
            <div className="navbar-start">
                <Link href="/" className="text-xl font-bold text-green-600">
                    QurbaniHat
                </Link>
            </div>

            {/* RIGHT */}
            <div className="navbar-end gap-4">
                <Link href="/">Home</Link>
                <Link href="/animals">All Animals</Link>

                <Link href="/login" className="btn btn-sm">
                    Login
                </Link>

                <Link href="/register" className="btn btn-sm btn-primary">
                    Register
                </Link>
            </div>

        </div>
    );
}