import Link from 'next/link';

export default function Contact() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          {/* Address Section */}
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">📍 Address</h2>
            <Link href="https://www.google.com/maps/place/123+Glamour+Street,+Beauty+Town" target="_blank" className="text-yellow-900 hover:underline">
              WK Beauty Salon, 123 Glamour Street, Beauty Town, City, ZIP Code
            </Link>
          </div>

          {/* Phone Section */}
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">📞 Phone</h2>
            <Link href="tel:+1234567890" className="text-yellow-900 hover:underline">
              (+123) 456-7890
            </Link>
          </div>

          {/* Email Section */}
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">📧 Email</h2>
            <Link href="mailto:info@wkbeautysalon.com" className="text-yellow-900 hover:underline">
              info@wkbeautysalon.com
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🌐 Social Media</h2>
            <Link href="https://instagram.com/wkbeautysalon" target="_blank" className="text-yellow-900 hover:underline">
              Instagram: @wkbeautysalon
            </Link>
            <br />
            <Link href="https://facebook.com/wkbeautysalon" target="_blank" className="text-yellow-900 hover:underline">
              Facebook: WK Beauty Salon
            </Link>
            <br />
            <Link href="https://wa.me/1234567890" target="_blank" className="text-yellow-900 hover:underline">
              WhatsApp: +1234567890
            </Link>
          </div>

          {/* Business Hours Section */}
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🕒 Business Hours</h2>
            <p className="text-gray-700">Monday to Friday: 9:00 AM – 7:00 PM</p>
            <p className="text-gray-700">Saturday: 10:00 AM – 6:00 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
        </div>

        {/* Right Section (Map + Contact Form) */}
        <div className="md:w-1/2 space-y-8">
          {/* Map Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🗺️ Visit Us</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5028053550484!2d-122.40170068468193!3d37.786886679758205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809dc2b7c4d7%3A0x6ed86c0c26de565c!2sWK%20Beauty%20Salon!5e0!3m2!1sen!2sus!4v1697608350057!5m2!1sen!2sus"
                width="600"
                height="450"
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">✉️ Contact Form</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-950 text-white py-2 rounded hover:bg-yellow-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
