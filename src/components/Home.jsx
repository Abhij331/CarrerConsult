import React from "react";
import { Link } from "react-router-dom";
import teamImage from "../assets/teamImage.jpg"; // Place your image inside /src/assets/images/

const Home = () => {
  return (
    <section className="bg-gray-900 text-white min-h-[80vh] py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Text Section */}
        <div className="md:w-1/2">
          <p className="text-blue-500 text-sm font-semibold mb-2">
            Empowering Career Growth
          </p>
          <h1 className="text-4xl font-bold mb-3">
            Build Your Future With Confidence
          </h1>
          <p className="text-gray-300 mb-6">
            Our expert consultants help you navigate your career journey. Get
            professional guidance, resume reviews, and personalized mentoring to
            land your dream job.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400">📍</span>
            <p className="text-sm">Bangalore, India</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <Link
              to="/services"
              className="px-6 py-2 border border-purple-400 text-black-400 hover:bg-purple-500 hover:text-white rounded"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-blue-300 text-gray-900 font-semibold hover:bg-blue-600 rounded"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="md:w-1/2">
          <img
            src={teamImage}
            alt="Consulting Team"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
