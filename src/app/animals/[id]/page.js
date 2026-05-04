"use client";

import { useParams } from "next/navigation";
import animals from "@/data/animals.json";
import { useState, useEffect } from "react"; // useState এবং useEffect এক লাইনে
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function AnimalDetails() {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    // Animal খুঁজে বের করা
    const animal = animals.find((a) => String(a.id) === id);

    // ইউজার সেশন চেক করা
    useEffect(() => {
        authClient.getSession().then((session) => {
            setUser(session?.user);
        });
    }, []);

    // ফর্ম স্টেট
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    if (!animal) {
        return <p className="p-6 text-center text-red-500 font-bold">Animal Not Found</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("Please login first to book!");
            return;
        }

        toast.success("Booking successful!");

        // ফর্ম রিসেট করা
        setForm({
            name: "",
            email: "",
            phone: "",
            address: "",
        });
    };

    return (
        <div className="max-w-6xl mx-auto p-4 lg:p-10">
            {/* ANIMAL DETAILS SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                        src={animal.image}
                        alt={animal.name}
                        className="w-full h-auto hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-extrabold text-gray-800">{animal.name}</h1>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        {animal.description}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                        <p className="bg-gray-50 p-2 rounded"><b>Type:</b> {animal.type}</p>
                        <p className="bg-gray-50 p-2 rounded"><b>Breed:</b> {animal.breed}</p>
                        <p className="bg-gray-50 p-2 rounded"><b>Weight:</b> {animal.weight} kg</p>
                        <p className="bg-gray-50 p-2 rounded"><b>Age:</b> {animal.age} years</p>
                        <p className="bg-gray-50 p-2 rounded col-span-2"><b>Location:</b> {animal.location}</p>
                    </div>

                    <p className="text-green-600 text-3xl font-black mt-6">
                        ৳ {animal.price.toLocaleString()}
                    </p>
                </div>
            </div>

            <hr className="my-12 border-gray-200" />

            {/* BOOKING FORM SECTION */}
            <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-inner mb-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Book This Animal</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Delivery Address"
                        className="input input-bordered w-full focus:ring-2 focus:ring-primary"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        required
                    />

                    <button className="btn btn-primary w-full text-white font-bold text-lg">
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
}