import Image from "next/image";

export default async function About() {
  // Optional loading effect before the page renders
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-brown-800 to-white">
      <h1 className="text-5xl font-bold text-center shadow-white text-gray-700 mb-4 mt-4">
        About Us
      </h1>
      <div className="flex w-full max-w-5xl h-[500px]"> {/* Flex container for side-by-side layout */}
        <div className="relative w-1/2 h-full"> {/* Image container */}
          <Image 
            src="/images/your-image.jpg" 
            alt="Background"
            layout="fill"
            className="absolute inset-0 object-cover rounded-lg opacity-100" // Ensures the image fits within the container
          />
        </div>
        <div className="relative z-10 flex items-center justify-center w-1/2 h-full"> {/* Paragraph container */}
          <p className="p-10 bg-white bg-opacity-80 rounded-lg text-xl text-center">
            At WK Beauty Salon, we believe that beauty is not just about appearance— 
            it&apos;s about confidence, self-expression, and self-care. Our salon is a sanctuary 
            where expert stylists and beauty professionals provide personalized services 
            tailored to your unique needs. Whether it&apos;s a fresh hairstyle, rejuvenating 
            skincare, or elegant makeup, we are dedicated to enhancing your natural beauty. 
            With a focus on quality, creativity, and the latest trends, WK Beauty Salon 
            offers a luxurious and relaxing environment where you can unwind and leave 
            feeling refreshed, radiant, and empowered.
          </p>
        </div>
      </div>
      <button className="mt-8 p-4 text-lg font-semibold text-yellow-200 bg-amber-950 rounded hover:bg-brown-700 transform hover:scale-105 transition duration-200">
        Book Now
      </button>
    </div>
  );
}
