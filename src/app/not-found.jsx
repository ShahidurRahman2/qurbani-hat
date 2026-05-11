"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4">


            <h1 className="text-7xl font-extrabold text-red-500">
                404
            </h1>

            <h2 className="text-2xl font-bold mt-4 text-gray-700">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-2 text-center max-w-md">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>


            <Link
                href="/"
                className="mt-6 btn btn-primary flex items-center gap-2"
            >
                <FaHome />
                Go Home
            </Link>

        </div>
    );
}