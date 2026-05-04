import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-base-200 text-center p-6 mt-10">
            <h2 className="font-bold text-lg">QurbaniHat</h2>

            <p className="text-sm mt-2">
                Trusted livestock marketplace for Qurbani
            </p>

            <div className="flex justify-center gap-4 mt-3 text-xl">
                <FaFacebook />
                <FaInstagram />
            </div>

            <p className="text-xs mt-3">
                © 2026 All rights reserved
            </p>
        </footer>
    );
}