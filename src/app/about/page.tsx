import Image from "next/image";

export default async function About() {
  // Optional loading effect before the page renders
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-brown-800 to-white px-4 sm:px-8">
      <h1 className="text-3xl sm:text-5xl font-bold text-center shadow-white text-gray-700 mb-6 mt-6">
        About Us
      </h1>
      <div className="flex flex-col md:flex-row w-full max-w-5xl h-auto md:h-[500px] space-y-6 md:space-y-0 md:space-x-6">
        {/* Image container */}
        <div className="relative w-full md:w-1/2 h-64 md:h-full">
          <Image
            src="/images/your-image.jpg"
            alt="Background"
            layout="fill"
            className="absolute inset-0 object-cover rounded-lg opacity-100"
          />
        </div>

        {/* Paragraph container */}
        <div className="relative z-10 flex items-center justify-center w-full md:w-1/2 h-auto">
          <p className="p-6 sm:p-10 bg-white bg-opacity-80 rounded-lg text-base sm:text-lg lg:text-xl text-center leading-relaxed">
            At WK Beauty Salon, we believe that beauty is not just about appearance—
            it&apos;s about confidence, self-expression, and self-care. Our salon is a
            sanctuary where expert stylists and beauty professionals provide personalized
            services tailored to your unique needs. Whether it&apos;s a fresh hairstyle,
            rejuvenating skincare, or elegant makeup, we are dedicated to enhancing your
            natural beauty. With a focus on quality, creativity, and the latest trends,
            WK Beauty Salon offers a luxurious and relaxing environment where you can
            unwind and leave feeling refreshed, radiant, and empowered.
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="mt-8 p-4 text-sm sm:text-lg font-semibold text-yellow-200 bg-amber-950 rounded hover:bg-brown-700 transform hover:scale-105 transition duration-200">
        Book Now
      </button>
    </div>
  );
}
