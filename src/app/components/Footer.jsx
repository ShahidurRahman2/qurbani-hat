import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-12 bg-gradient-to-r from-blue-400 via-white to-green-400 border-t">

            <div className="text-center p-8">

                {/* TITLE */}
                <h2 className="font-bold text-2xl text-green-700">
                    QurbaniHat
                </h2>

                {/* DESCRIPTION */}
                <p className="text-sm mt-2 text-gray-600 max-w-md mx-auto">
                    QurbaniHat is a trusted livestock marketplace where you can
                    explore healthy cows and goats, compare prices, and book animals
                    easily for Qurbani with confidence.
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center gap-6 mt-5 text-2xl text-blue-600">
                    <a href="#" className="hover:text-blue-800 transition">
                        <FaFacebook />
                    </a>

                    <a href="#" className="hover:text-pink-500 transition">
                        <FaInstagram />
                    </a>
                </div>

                {/* EXTRA INFO */}
                <p className="text-xs text-gray-500 mt-4">
                    Fast • Secure • Reliable • Made for Qurbani season
                </p>

                {/* COPYRIGHT */}
                <p className="text-xs mt-2 text-gray-500">
                    © 2026 QurbaniHat. All rights reserved.
                </p>

            </div>
        </footer>
    );
}