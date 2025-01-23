export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header section with responsive background image and opacity settings */}
      <div className="relative h-screen w-full flex items-center justify-center lg:justify-start lg:items-start bg-cover bg-center bg-no-repeat">
        {/* Background overlay for opacity control */}
        <div
          className="absolute inset-0 bg-[url('/images/yy.JPG')] bg-cover bg-center bg-no-repeat opacity-70 lg:opacity-100"
        ></div>

        {/* Content Section */}
        <div className="relative z-10 px-6 sm:px-10 lg:pl-[140px] lg:pt-[180px] bg-opacity-0 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[rgb(14,12,1)] drop-shadow-md mb-4 lg:mb-6">
            WK Beauty Salon
          </h1>
          <p className="text-[16px] sm:text-[18px] font-[400] text-[rgb(12,11,0)] leading-relaxed mb-4 lg:mb-6 sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
            Experience elegance and expert care at WK Beauty Salon. Let our
            skilled professionals enhance your beauty, leaving you radiant and
            refreshed.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[rgba(39,30,2,0.896)] text-[rgb(188,176,138)] font-bold px-6 sm:px-10 py-3 sm:py-4 rounded shadow-lg hover:bg-white hover:text-[rgb(114,52,52)] transition-all">
            We&apos;re Booking Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
