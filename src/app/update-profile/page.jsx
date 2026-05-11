"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";






export default function UpdateProfile() {

    const router = useRouter();

    const { data: session } = authClient.useSession();

    const [name, setName] = useState(session?.user?.name || "");
    const [image, setImage] = useState(session?.user?.image || "");

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {

            await authClient.updateUser({
                name,
                image,
            });

            toast.success("Profile Updated Successfully");

            router.push("/my-profile");

        } catch (error) {
            toast.error("Update Failed");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">

            <div className="card bg-base-100 shadow-xl p-6">

                <h2 className="text-3xl font-bold text-center mb-6">
                    Update Profile
                </h2>

                <form onSubmit={handleUpdate} className="space-y-4">

                    <input
                        type="text"
                        placeholder="New Name"
                        className="input input-bordered w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="New Image URL"
                        className="input input-bordered w-full"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />

                    <button className="btn btn-success w-full">
                        Update Information
                    </button>

                </form>
            </div>
        </div>
    );
}