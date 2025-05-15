

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-white mb-4">Contact Us</h3>
          <div className="flex items-start gap-2">
            🌍
            <p>
              5th cross MSR Nagar, Mathikere<br />
              Bangalore, Karnataka, INDIA
            </p>
          </div>
          <p className="mt-4">📞 +911234567890</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-white mb-4">Newsletter</h3>
          <p className="mb-3">Subscribe to our newsletter to receive updates and news.</p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-md bg-transparent border border-gray-400 text-white"
            />
            <button
              type="submit"
              className="w-full bg-blue-300 text-black font-semibold py-2 rounded-md hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>© 2024 CarrerConsult. All rights reserved.</p>
        <div className="space-x-6 mt-3 md:mt-0">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/services" className="hover:text-white">Services</a>
        </div>
      </div>
    </footer>
  );
}
