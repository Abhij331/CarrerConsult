import React from "react";
import teamImage from "../assets/image.jpg"; // Make sure this path is correct

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold">Our Story</p>
          <h2 className="text-4xl font-bold mb-2">About CareerConsult</h2>
          <div className="w-20 h-1 bg-purple-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Established in 2024, CareerConsult is committed to helping students and professionals
            reach their full potential with personalized guidance, mentorship, and strategic planning.
          </p>
        </div>

        {/* Image + Text Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={teamImage}
              alt="Our Consulting Team"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 space-y-6">
            <div className="border-l-4 border-yellow-400 pl-4 text-gray-300">
              <p>
                Since our launch, we’ve helped hundreds of individuals gain clarity in their career
                paths through resume building, interview preparation, and tailored career advice.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow">
              <p className="text-yellow-400 text-2xl mb-2">“</p>
              <p className="text-gray-300">
                We take pride in our attention to detail and personalized service,
                ensuring each client walks away with actionable insights and renewed confidence.
                Our consultants combine industry knowledge with the latest career trends to help
                you succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
