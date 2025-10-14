import React from "react";
import { motion } from "framer-motion";
import sportsImage from "../assets/img2.jpg"; // replace with your sports injury image path

const SportsInjury = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center">
        <img
          src={sportsImage}
          alt="Sports Injury Rehabilitation"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <motion.div
          className="relative text-center text-white px-6 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Sports Injury Rehabilitation
          </h1>
          <p className="text-lg md:text-xl leading-relaxed drop-shadow">
            At <span className="font-semibold text-teal-300">The Physic Fitness</span>, 
            our Sports Injury Rehabilitation program is designed to help athletes 
            and active individuals recover faster, regain strength, and return to 
            peak performance safely.
          </p>
          <button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
            Book a Session
          </button>
        </motion.div>
      </div>

      {/* What is Sports Injury Rehab? */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-3xl font-bold text-teal-900">What is Sports Injury Rehabilitation?</h2>
        <p className="text-gray-500 leading-relaxed bg-white p-6 rounded-xl shadow-md">
          Sports Injury Rehabilitation focuses on treating injuries sustained 
          during sports, workouts, or physical activities. It involves customized 
          exercise programs, manual therapy, and recovery techniques aimed at 
          restoring mobility, flexibility, and strength while preventing future 
          injuries.
          <br /><br />
          Whether it’s a sprain, strain, muscle tear, or joint issue, our goal is 
          to get you back in action as safely and efficiently as possible.
        </p>
      </div>

      {/* Techniques Used */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-6 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold text-teal-900">Techniques Used</h2>
        <p className="text-gray-500 leading-relaxed p-6 bg-white rounded-xl shadow-md">
          <strong>Manual Therapy:</strong> Hands-on techniques to reduce pain, 
          improve joint movement, and relax tight muscles.
          <br /><br />
          <strong>Strength Training:</strong> Customized exercises to rebuild 
          strength in affected muscles and joints.
          <br /><br />
          <strong>Stretching & Flexibility Work:</strong> Enhances muscle 
          elasticity and prevents stiffness during recovery.
          <br /><br />
          <strong>Electrotherapy & Ultrasound:</strong> Used to stimulate 
          healing and reduce inflammation.
        </p>
      </div>

      {/* Applications */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-3xl font-bold text-teal-900">Applications of Sports Injury Rehab</h2>
        <p className="text-gray-500 leading-relaxed bg-white p-6 rounded-xl shadow-md">
          Sports injury rehab is suitable for anyone recovering from physical 
          injuries caused by sports, gym workouts, or overuse. Our physiotherapists 
          evaluate your condition, create a personalized treatment plan, and guide 
          you through each stage of recovery to ensure optimal performance and 
          long-term prevention.
        </p>
      </div>

      {/* Benefits */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">Benefits of Sports Injury Rehab</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Faster recovery from injuries",
            "Improved muscle strength and flexibility",
            "Reduced pain and inflammation",
            "Enhanced athletic performance",
            "Better coordination and stability",
            "Lower risk of re-injury",
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-teal-600 font-semibold mb-2">{benefit}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Common Conditions Treated */}
      <div className="max-w-6xl mx-auto px-6 py-16 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold text-teal-900 text-center mb-10">Common Conditions Treated</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Muscle strains and ligament sprains",
            "Tennis elbow and Golfer’s elbow",
            "ACL and meniscus injuries",
            "Shoulder dislocations",
            "Ankle sprains",
            "Hamstring injuries",
            "Shin splints",
            "Rotator cuff injuries",
            "Post-surgery rehabilitation",
          ].map((condition, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-teal-600 font-semibold mb-2">{condition}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-teal-100 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-teal-800 mb-6">
            Why Choose Our Sports Injury Rehab?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our expert physiotherapists specialize in sports rehabilitation, 
            focusing on restoring your body’s full potential. We combine 
            evidence-based techniques, modern equipment, and personalized 
            exercise programs to get you back to your sport stronger than before.
          </p>
          <div className="text-center py-10">
            <button className="bg-teal-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-teal-700 transition">
              Book Your Appointment Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsInjury;
