import React from "react";
import { ArrowRight, Play } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
     className="bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-12 pb-20 lg:pt-16 lg:pb-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Heading & Description */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Expert Physiotherapy for Your
                <span className="block text-blue-600 mt-2">
                  Recovery Journey
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Get back to doing what you love with personalized treatment
                plans, state-of-the-art equipment, and compassionate care from
                our certified physiotherapist.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 tracking-wide">Dr. Mujeeb-Ur-Rehman (PT)</h4>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
                Book Your Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <button className="flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition duration-300">
                <Play className="mr-2 w-5 h-5 text-blue-600" />
                Watch Our Story
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2500+</div>
                <div className="text-sm text-gray-600 mt-1">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600 mt-1">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content (Image with Decorations) */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwdHJlYXRtZW50JTIwc2Vzc2lvbnxlbnwxfHx8fDE3NTU5ODYyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Physiotherapy treatment session"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Decorative shapes */}
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-blue-600 rounded-2xl opacity-20"></div>
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
