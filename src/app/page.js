import animals from "@/data/animals.json";

export default function Home() {
  const featured = animals.slice(0, 4);

  return (
    <div className="p-6">
      {/* banner is start under the line */}
      <div className="hero min-h-[80vh] rounded-xl bg-gradient-to-r from-green-100 to-green-300">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">


          <div className="content-start w-1/3">
            <img
              src="https://i.ibb.co.com/rrGvsnz/images.jpg"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>



          <div className="content-end w-2/3">
            <h1 className="text-3xl lg:text-4xl font-bold animate__animated animate__fadeInDown">
              Find Your Perfect Qurbani Animal
            </h1>

            <p className="py-4 text-gray-600">
              Explore healthy cows and goats for your Qurbani.
              Easy booking, trusted sellers, and best quality livestock.
            </p>

            <div className=" content-center">
              <button className="btn btn-primary">
                Browse Animals
              </button>
            </div>
          </div>





        </div>
      </div>
      {/* Banner end above the line */}


      <h2 className="text-xl font-bold mb-4">Featured Animals</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featured.map((animal) => (
          <div key={animal.id} className="card bg-base-200 p-3">

            <img
              src={animal.image}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="font-bold mt-2">{animal.name}</h3>

            <p className="text-sm">{animal.location}</p>

            <p className="font-semibold text-green-600">
              ৳ {animal.price}
            </p>

          </div>
        ))}
      </div>




      {/* new section here */}

      <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 py-12 px-6 mt-10 rounded-2xl">

        <h2 className="text-3xl font-bold text-center ">
          Qurbani Tips & Guide
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold text-blue-600">Healthy Selection</h3>
            <p className="text-sm mt-2 text-gray-600">
              Always choose healthy, active animals with clear eyes and good weight.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold text-blue-600">Fair Pricing</h3>
            <p className="text-sm mt-2 text-gray-600">
              Compare prices before booking to avoid overpaying.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold text-blue-600">Proper Care</h3>
            <p className="text-sm mt-2 text-gray-600">
              Ensure animals are well-fed and kept in clean environments.
            </p>
          </div>

        </div>
      </div>

    </div>




  );
}