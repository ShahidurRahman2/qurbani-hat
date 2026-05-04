import animals from "@/data/animals.json";
import Link from "next/link";

export default function AnimalsPage() {
    return (



        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">
                All Animals
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {animals.map((animal) => (
                    <div key={animal.id} className="card bg-base-200 p-3 shadow">

                        <img
                            src={animal.image}
                            className="h-40 w-full object-cover rounded"
                        />

                        <h2 className="font-bold mt-2">{animal.name}</h2>

                        <p className="text-sm">{animal.location}</p>

                        <p className="text-green-600 font-semibold">
                            ৳ {animal.price}
                        </p>

                        <Link href={`/animals/${animal.id}`}>
                            <button className="btn btn-primary btn-sm mt-2 w-full">
                                View Details
                            </button>
                        </Link>

                    </div>
                ))}
            </div>

        </div>
    );
}