import Image from "next/image";

const services = [
  {
    id: 1,
    name: "Haircuts & Styling",
    image: "/images/hair.jpg",
    description: "Professional haircuts and styling to suit your unique look.",
  },
  {
    id: 2,
    name: "Hair Coloring",
    image: "/images/color.jpg",
    description: "Add color or highlights to express your style.",
  },
  {
    id: 3,
    name: "Hair Treatments",
    image: "/images/treat.webp",
    description: "Revitalize your hair with our nourishing treatments.",
  },
  {
    id: 4,
    name: "Facials & Skincare",
    image: "/images/skin.PNG",
    description: "Rejuvenate your skin with our facial treatments.",
  },
  {
    id: 5,
    name: "Makeup",
    image: "/images/makeup.PNG",
    description: "Perfect makeup application for every occasion.",
  },
  {
    id: 6,
    name: "Manicure & Pedicure",
    image: "/images/menipedi.jpg",
    description: "Keep your hands, feet and nails healthy and stylish.",
  },
  {
    id: 7,
    name: "Waxing & Threading",
    image: "/images/wax.AVIF",
    description: "Smooth and flawless skin with our services.",
  },
  {
    id: 8,
    name: "Bridal Packages",
    image: "/images/bride.jpg",
    description: "Customized packages to make your special day perfect.",
  },
];

export default function Services() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 text-center bg-[#FFF8F0]">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-110"
          >
            <Image
              src={service.image}
              alt={service.name}
              width={300}
              height={200}
              className="w-full h-56 object-cover"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mt-4 px-4">
              {service.name}
            </h2>
            <p className="text-gray-600 px-4 mt-2">{service.description}</p>
            <a
              href="#"
              className="text-yellow-600 font-medium hover:text-blue-800 px-4 mt-2 inline-block transition-colors"
            >
              View More →
            </a>
            <button className="bg-[#5e4226] text-white rounded-full py-3 px-6 mt-4 mb-6 hover:bg-[#3e2a1a] transition-all text-lg">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
