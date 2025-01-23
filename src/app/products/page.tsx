import Image from "next/image";

export default function Products() {
  const products = [
    {
      name: "Premium Hair Care Products",
      image: "/images/hair-care.webp",
      description: "Keep your hair healthy and vibrant with our premium hair care range.",
    },
    {
      name: "Professional Hair Styling Tools",
      image: "/images/tools.jpeg",
      description: "Achieve salon-quality hairstyles with our advanced styling tools.",
    },
    {
      name: "Skin Care Essentials",
      image: "/images/skincare.jpg",
      description: "Nurture your skin with our carefully curated skincare essentials.",
    },
    {
      name: "Makeup Products",
      image: "/images/makeupp.avif",
      description: "Explore our high-quality makeup collection to enhance your beauty.",
    },
    {
      name: "Nail Care Kits",
      image: "/images/nailcare.jpg",
      description: "Maintain flawless nails with our all-in-one nail care kits.",
    },
    {
      name: "Body Care Products",
      image: "/images/bodycare.webp",
      description: "Rejuvenate your body with our luxurious body care range.",
    },
    {
      name: "Fragrances",
      image: "/images/fragnance.jpeg",
      description: "Discover your signature scent from our collection of fragrances.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 bg-[#FFF8F0]">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            key={index}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-52 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <a
                href="#"
                className="block mt-4 text-center text-white bg-[#5e4226] py-2 px-4 rounded hover:bg-[#b5845c] transition duration-200"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
