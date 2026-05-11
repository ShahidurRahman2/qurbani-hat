"use client";

import animalsData from "@/data/animals.json";
import Link from "next/link";
import { useState } from "react";

export default function AnimalsPage() {

    const [sortOrder, setSortOrder] = useState("");

    const sortedAnimals = [...animalsData].sort((a, b) => {

        if (sortOrder === "low") {
            return a.price - b.price;
        }

        if (sortOrder === "high") {
            return b.price - a.price;
        }

        return 0;
    });

    return (
        <div className="p-6">

            {/* TITLE + SORT */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

                <h1 className="text-3xl font-bold">
                    All Animals
                </h1>

                <select
                    className="select select-bordered"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="">Sort By Price</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                {sortedAnimals.map((animal) => (

                    <div
                        key={animal.id}
                        className="card bg-base-200 p-3 shadow-lg hover:shadow-2xl transition duration-300"
                    >

                        <img
                            src={animal.image}
                            alt={animal.name}
                            className="h-44 w-full object-cover rounded-lg"
                        />

                        <h2 className="font-bold text-lg mt-3">
                            {animal.name}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {animal.location}
                        </p>

                        <p className="text-green-600 font-bold text-lg mt-1">
                            ৳ {animal.price}
                        </p>

                        <Link href={`/animals/${animal.id}`}>
                            <button className="btn btn-success btn-sm mt-3 w-full text-white">
                                View Details
                            </button>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
}